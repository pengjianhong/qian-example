type ArticleProps = {
    title: string;
    content: string;
    date: string;
    children: React.ReactNode;
}
const Article = ({title, content, date, children}: ArticleProps) => {
    return (
        <div className="flex flex-col gap-4 mt-4 ">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p>{content}</p>
            <p>date: {date}</p>
            {children}
        </div>
    )
}
export default Article;