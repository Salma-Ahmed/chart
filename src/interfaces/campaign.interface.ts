import IContent from "./content.interface";

interface ICampaign {
  title: string;
  startDate: string;
  endDate: string;
  duration: number;
  color: string;
  content?: Array<IContent>;
}

export default ICampaign;
