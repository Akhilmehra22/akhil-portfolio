import { useState } from 'react'
import Section from './Section.jsx'

const MAX_LENGTH = 2000

export default function FitCheck() {
  const [brief, setBrief] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | done | error
  const [result, setResult] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    const trimmed = brief.trim()
    if (!trimmed || status === 'loading') return

    setStatus('loading')
    setResult('')

    try {
      const res = await fetch('/api/assess-fit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ brief: trimmed }),
      })
      const data = await res.json()

      if (!res.ok) {
        setStatus('error')
        setResult(data.error || 'Something went wrong — please try again.')
        return
      }

      setStatus('done')
      setResult(data.assessment)
    } catch {
      setStatus('error')
      setResult('Couldn’t reach the assessor — check your connection and try again.')
    }
  }

  return (
    <Section
      id="fit-check"
      label="Project Assessor"
      title="Are We a Fit?"
      lede="Describe the project or data challenge you're trying to solve. This assistant evaluates your brief against my background in analytics engineering, BI, and data infrastructure to see if my skillset matches your needs."
    >
      <form className="fit-check" onSubmit={submit}>
        <textarea
          className="fit-check__input"
          value={brief}
          maxLength={MAX_LENGTH}
          onChange={(e) => setBrief(e.target.value)}
          placeholder={
            'Describe your project (e.g., "I need a Kimball-style data warehouse built from scratch," or "Looking for someone to automate our reporting and build Power BI dashboards...")'
          }
          rows={4}
        />

        <div className="fit-check__foot">
          <p className="fit-check__disclaimer">
            Prompts are processed by OpenAI to generate your assessment.
            Please don’t share sensitive company data or personal
            information.
          </p>
          <button
            className="btn btn--solid"
            type="submit"
            disabled={!brief.trim() || status === 'loading'}
          >
            {status === 'loading' ? 'Assessing…' : 'Assess Project Fit'}
          </button>
        </div>

        {result && (
          <div
            className={`fit-check__result ${status === 'error' ? 'fit-check__result--error' : ''}`}
            role="status"
          >
            {result}
          </div>
        )}
      </form>
    </Section>
  )
}
