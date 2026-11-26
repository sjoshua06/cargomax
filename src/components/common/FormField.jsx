import "../../styles/form.css";

/**
 * Shared form field — visible label + input/select/textarea + hint + error.
 * Placeholder is never the only label.
 *
 *   <FormField label="Email" name="email" type="email" required error="…" />
 */
function FormField({
  label,
  name,
  type = "text",
  value,
  onChange,
  onBlur,
  required = false,
  error,
  hint,
  placeholder,
  options = [],
  rows = 4,
  className = "",
  ...rest
}) {
  const id = `field-${name}`;
  const errorId = `${id}-error`;
  const hintId = `${id}-hint`;
  const hasError = Boolean(error);

  const describedBy =
    [hasError ? errorId : null, hint && !hasError ? hintId : null]
      .filter(Boolean)
      .join(" ") || undefined;

  const sharedProps = {
    id,
    name,
    value,
    onChange,
    onBlur,
    required,
    "aria-invalid": hasError || undefined,
    "aria-describedby": describedBy,
    placeholder,
    className: `form-field__input${hasError ? " is-error" : ""}`,
    ...rest,
  };

  let control;

  if (type === "textarea") {
    control = <textarea {...sharedProps} rows={rows} />;
  } else if (type === "select") {
    control = (
      <select {...sharedProps}>
        <option value="">{placeholder || "Select…"}</option>
        {options.map(({ value: val, label: lbl }) => (
          <option key={val} value={val}>
            {lbl}
          </option>
        ))}
      </select>
    );
  } else {
    control = <input type={type} {...sharedProps} />;
  }

  return (
    <div className={`form-field ${className}`.trim()}>
      <label htmlFor={id} className="form-field__label">
        {label}
        {required && (
          <span className="form-field__required" aria-hidden="true">
            {" "}
            *
          </span>
        )}
      </label>

      {control}

      {hint && !hasError && (
        <p id={hintId} className="form-field__hint">
          {hint}
        </p>
      )}
      {hasError && (
        <p id={errorId} className="form-field__error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export default FormField;
