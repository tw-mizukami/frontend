export type BoxNumType = {
    num: number;
}

export type lotInfoType = {
    start_time: string;
    productionPlan_num: number;
    supply_num: number;
    box_num: BoxNumType[];
};