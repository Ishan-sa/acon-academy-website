// Shared Formspree integration for all site forms.
// All submissions post to a single endpoint; `_formName` / `_subject`
// tag each one so they can be told apart in the Formspree inbox.

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mojzvdgd";

export async function submitToFormspree(
  data: Record<string, unknown>,
  formName: string,
): Promise<boolean> {
  try {
    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        ...data,
        _formName: formName,
        _subject: `ACON Academy — ${formName}`,
      }),
    });
    return res.ok;
  } catch {
    return false;
  }
}
