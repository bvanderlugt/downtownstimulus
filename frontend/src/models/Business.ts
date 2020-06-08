export interface IBusiness {
  id: number;
  name: string;
  owner_email: string;
  logo: string;
  short_description: string;
  history: string;
  covid_story: string;
  images: string;
  other_content: string;
  expenditure_details: string;
  stripe_id: string;
  goal_amount: number;
  donation_received: number;
  current_clr_matching_amount: string;
}
