export interface EventType {
  id: number;
  title: string;
  description: string;
  createdId: number;
  intraId: string;
  isMatching: number;
}

export interface userData {
  id: string;
  isLogin: boolean;
  isAdmin: boolean;
  profileUrl: string;
}

export interface EvnetListType {
  statusCode: number;
  EventList: Event[];
}

export interface teamMemInfo {
  intraId: string;
  url: string;
  teamId: number;
}

export interface PostingType {
  boardId: number;
  eventId: number;
  title: string;
  intraId: string; // createBy
  contents: string;
  createAt: Date;
  updateAt: Date;
  image: string;
  commentNum: number;
  url: string;
}

export interface ReviewModalShowType {
  mode: string;
  show: boolean;
}

export interface ReviewSelectedTeamType {
  [x: string]: teamMemInfo[];
}

export interface ReviewSelectedEventType extends EventType {
  teamList: ReviewSelectedTeamType;
}
