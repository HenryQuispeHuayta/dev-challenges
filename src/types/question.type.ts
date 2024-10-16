export interface QuestionType {
  question: string;
  description: string;
  steps: string[];
  unorderList?: boolean | false;
  moreInfo: string;
}

