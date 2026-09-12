import { useState } from 'react'
import Section from './Section.jsx'

const MAX_LENGTH = 2000

export default function FitCheck() {
  const [brief, setBrief] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | done | error
  const [result, setResult] = useState('')
  const [activeMode, setActiveMode] = useState(null) // 'professional' | 'collaborator'

  const submit = async (mode) => {
    const trimmed = brief.trim()
    if (!trimmed || status === 'loading') return

    setActiveMode(mode)
    setStatus('loading')
    setResult('')

    try {
      const res = await fetch('/api/assess-fit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ brief: trimmed, mode }),
      })
      const data = await res.json()

      if (!res.ok) {
        setStatus('error')
        setResult(data.error || 'Something went wrong. Please try again.')
        return
      }

      setStatus('done')
      setResult(data.assessment)
    } catch {
      setStatus('error')
      setResult('Couldn’t reach the assessor. Check your connection and try again.')
    }
  }

  const loading = status === 'loading'
  const disabled = !brief.trim() || loading

  return (
    <Section
      id="fit-check"
      label="Ask About Akhil"
      title="Are We a Fit?"
      lede="Describe your project, your team, or the kind of person you're looking for. Then choose how you'd like to size Akhil up: as the professional who does the work, or as the teammate who does it alongside you."
    >
      <form className="fit-check" onSubmit={(e) => e.preventDefault()}>
        <textarea
          className="fit-check__input"
          value={brief}
          maxLength={MAX_LENGTH}
          onChange={(e) => setBrief(e.target.value)}
          placeholder={
            'Describe your project or team (e.g., "We need a Kimball-style data warehouse and self-serve Power BI," or "We\'re a small analytics team that ships fast and needs someone who can own problems end to end...")'
          }
          rows={4}
        />

        <div className="fit-check__actions">
          <button
            className="btn btn--solid"
            type="button"
            onClick={() => submit('professional')}
            disabled={disabled}
          >
            {loading && activeMode === 'professional'
              ? 'Assessing…'
              : 'Assess the Professional'}
          </button>
          <button
            className="btn btn--solid fit-check__btn-alt"
            type="button"
            onClick={() => submit('collaborator')}
            disabled={disabled}
          >
            {loading && activeMode === 'collaborator'
              ? 'Assessing…'
              : 'Assess the Collaborator'}
          </button>
        </div>

        <p className="fit-check__disclaimer">
          The professional view weighs skills and experience; the collaborator
          view weighs how Akhil works with a team, takes ownership, and learns.
          Prompts are processed by OpenAI. Please don’t share sensitive company
          data or personal information.
        </p>

        {result && (
          <div
            className={`fit-check__result ${status === 'error' ? 'fit-check__result--error' : ''}`}
            role="status"
          >
            {status === 'done' && activeMode && (
              <p className="fit-check__result-label">
                {activeMode === 'collaborator'
                  ? 'As a collaborator'
                  : 'As a professional'}
              </p>
            )}
            {result}
          </div>
        )}
      </form>
    </Section>
  )
}
