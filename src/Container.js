export default function Container({ children, theme }) {
	return <div className={`container ${theme}`}>{children}</div>;
}
