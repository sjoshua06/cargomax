/** Centred max-width wrapper with consistent page gutters. */
function Container({ as: Tag = "div", className = "", children, ...rest }) {
  return (
    <Tag className={`container ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  );
}

export default Container;
