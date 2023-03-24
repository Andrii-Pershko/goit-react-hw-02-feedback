import css from './section.module.css'

export const Section = ({ title, children }) => {
    return (
    <section style={css.section}>
        <h2>{title}</h2>
        {children}
    </section>
    )
    
}