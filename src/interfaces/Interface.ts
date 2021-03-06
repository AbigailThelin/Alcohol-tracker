export interface IApp {
    openPanel: boolean;
}

export interface IAvailable{
    currentTrackers?: any;
    filteredTrackers?: any
}

export interface ISite {
    onPress?: boolean;
}

export interface IState{
    startDate?: any,
    endDate?: any
}
export interface IPanel {
    open?: any;
    toggle?:any;
}

export interface ITile {
    name?: string;
    style?: string;
    path: string;
}

export interface IAlcohol {
    startDate?: any;
    endDate?: any;
    modal: boolean;
    startDateBlah?: any;
}

export interface ITracker {
    employees?: any;
    badgeID?: string;
    ids?: any;
} 