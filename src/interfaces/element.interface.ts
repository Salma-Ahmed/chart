interface IElement {
    topics:Array<Topic>,
    onClick: () => void, 
}

interface Topic{
    title: string,
    campaigns: Array<Campaign>
}

interface Campaign {
    title: string;
    startDate: string,
    endDate: string,
    content: Array<Content>,
}

interface Content {
    title: string,
    description: string,
    date: string,
}
export default IElement;