export interface ISite {
    onPress?: boolean;
}

export interface StoreState {
    languageName: string;
    enthusiasmLevel: number;
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
}