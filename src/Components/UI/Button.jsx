import "./Button.css";

// Button Component with props for text, children, variant, onClick, href, type, className, and additional props. 
// Default variant is "primary" and default type is "button". 
// If href is provided, it renders an anchor link; otherwise, it renders a button. Children take precedence over text when provided.
 
function Button({ text, children, variant = "primary", onClick, href, type = "button", className = "", ...props }) {
    if (href) {
        return (
            <a className={`btn btn-${variant} ${className}`.trim()} href={href} onClick={onClick} {...props}>{children ?? text}</a>
        );
    }

    return (
        <button className={`btn btn-${variant} ${className}`.trim()} type={type} onClick={onClick} {...props}>{children ?? text}</button>
    );
}

export default Button;

