import ICampaign from "./campaign.interface";

interface ITopic {
  title: string;
  duration?: number;
  campaigns: Array<ICampaign>;
}

export default ITopic;
