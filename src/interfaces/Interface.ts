export interface IAvailable{
    currentTrackers?: string;
}

export interface ISite {
    onPress?: boolean;
}

export interface IState{
    startDate?: any,
    endDate?: any
}
export interface IPanel {
    showPanel?: boolean;
    panel?: boolean;
}

export interface ITile {
    name?: string;
    style?: string;
    path: string;
}

export interface IAlcohol {
    startDate?: string;
    endDate?: string;
    modal: boolean;
}

export interface ITracker {
    employees?: any;
    badgeID?: string;
    ids?: any;
}