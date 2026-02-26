import { Typography } from "@mui/material";
import style from "./style.module.css";

const LinkParagraph = ({ linkWithTag, paragraph }: { linkWithTag: Record<string, string>, paragraph: string }) => {
    const linkMap = new Map(Object.entries(linkWithTag));
    const urls = Array.from(linkMap.keys());
    const escapedUrls = urls.map((url: string) => url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    const regex = new RegExp(`(${escapedUrls.join('|')})`, 'g');
    const parts = paragraph.split(regex);

    return (
        <Typography className={style.textBox}>
            {parts.map((part, index) => {
                if (linkMap.has(part)) {
                    const tag = linkMap.get(part);
                    return (
                        <a key={index} href={part} target="_blank" className={style.anchorText}>
                            {tag}
                        </a>
                    );
                }
                // Otherwise, return the plain text
                return <span key={index}>{part}</span>;
            })}
        </Typography>
    );
}

export default LinkParagraph;