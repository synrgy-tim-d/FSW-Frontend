import { createContext, useReducer, useContext } from "react";

const InitialAddKostState = {
    ownerName:null,
    ownerPhone:null,
    ownerBank:null,
    ownerRekening:null,
    ownerRekeningName:null,
    kostName:null,
    kostAddress:null,
    kostLocationProvince:null,
    kostLocationDistrict:null,
    kostLocationSubdistrict:null,
    kostType:null,
    kostFacilities:null,
    kostRules:null,
    kostDescription:null,
    kostFaq:[],
    kostFrontPhoto:null,
    kostBackPhoto:null,
    roomDescription:null,
    roomFacilities:null,
    roomTotal:null,
    roomRemains:null,
    roomOption:null,
    roomCostDay:null,
    roomCostWeek:null,
    roomCostMonth:null,
    roomPhotos:null
}

export const AddKostActions = {
    SET_OWNER_NAME: 'SET_OWNER_NAME',
    SET_OWNER_PHONE: 'SET_OWNER_PHONE',
    SET_OWNER_BANK: 'SET_OWNER_BANK',
    SET_OWNER_REKENING: 'SET_OWNER_REKENING',
    SET_OWNER_REKENING_NAME: 'SET_OWNER_REKENING_NAME',
    SET_KOST_NAME:'SET_KOST_NAME',
    SET_KOST_ADDRESS: 'SET_KOST_ADDRES',
    SET_KOST_LOCATION_PROVINCE:'SET_KOST_LOCATION_PROVINCE',
    SET_KOST_LOCATION_DISTRICT:'SET_KOST_LOCATION_DISTRICT',
    SET_KOST_LOCATION_SUBDISTRICT:'SET_KOST_LOCATION_SUBDISTRICT',
    SET_KOST_TYPE:'SET_KOST_TYPEE',
    SET_KOST_FACILITIES:'SET_KOST_FACILITIES',
    SET_KOST_RULES:'SET_KOST_RULES',
    SET_KOST_DESCRIPTION:'SET_KOST_DESCRIPTION',
    SET_KOST_FAQ:'SET_KOST_FAQ',
    SET_KOST_FRONT_PHOTO:'SET_KOST_FRONT_PHOTO',
    SET_KOST_BACK_PHOTO:'SET_KOST_BACK_PHOTO',
    SET_ROOM_DESCRIPTION:'SET_ROOM_DESCRIPTION',
    SET_ROOM_FACILITIES:'SET_ROOM_FACILITIES',
    SET_ROOM_TOTAL:'SET_ROOM_TOTAL',
    SET_ROOM_REMAINS:'SET_ROOM_REMAINS',
    SET_ROOM_OPTION:'SET_ROOM_OPTION',
    SET_ROOM_COST_DAY:'SET_ROOM_COST_DAY',
    SET_ROOM_COST_WEEK:'SET_ROOM_COST_WEEK',
    SET_ROOM_COST_MONTH:'SET_ROOM_COST_MONTH',
    SET_ROOM_PHOTOS:'SET_ROOM_PHOTOS',
    RESET:'RESET',
}

const AddKostReducer = (state,action) => {
    switch (action.type) {
        case AddKostActions.SET_OWNER_NAME :
            return {...state, ownerName:action.payload}
        case AddKostActions.SET_OWNER_PHONE :
            return {...state, ownerPhone:action.payload}
        case AddKostActions.SET_OWNER_BANK :
            return {...state, ownerBank:action.payload}
        case AddKostActions.SET_OWNER_REKENING :
            return {...state, ownerRekening:action.payload}
        case AddKostActions.SET_OWNER_REKENING_NAME :
            return {...state, ownerRekeningName:action.payload}
        case AddKostActions.SET_KOST_NAME :
            return {...state, kostName:action.payload}
        case AddKostActions.SET_KOST_ADDRESS :
            return {...state, kostAddress:action.payload}
        case AddKostActions.SET_KOST_LOCATION_PROVINCE :
            return {...state, kostLocationProvince:action.payload}
        case AddKostActions.SET_KOST_LOCATION_DISTRICT :
            return {...state, kostLocationDistrict:action.payload}
        case AddKostActions.SET_KOST_LOCATION_SUBDISTRICT :
            return {...state, kostLocationSubdistrict:action.payload}
        case AddKostActions.SET_KOST_TYPE :
            return {...state, kostType:action.payload}
        case AddKostActions.SET_KOST_FACILITIES :
            return {...state, kostFacilities:action.payload}
        case AddKostActions.SET_KOST_RULES :
            return {...state, kostRules:action.payload}
        case AddKostActions.SET_KOST_DESCRIPTION :
            return {...state, kostDescription:action.payload}
        case AddKostActions.SET_KOST_FAQ :
            return {...state, kostFaq:action.payload}
        case AddKostActions.SET_KOST_FRONT_PHOTO :
            return {...state, kostFrontPhoto:action.payload}
        case AddKostActions.SET_KOST_BACK_PHOTO :
            return {...state, kostBackPhoto:action.payload}
        case AddKostActions.SET_ROOM_DESCRIPTION :
            return {...state, roomDescription:action.payload}
        case AddKostActions.SET_ROOM_FACILITIES :
            return {...state, roomFacilities:action.payload}
        case AddKostActions.SET_ROOM_TOTAL :
            return {...state, roomTotal:action.payload}
        case AddKostActions.SET_ROOM_REMAINS :
            return {...state, roomRemains:action.payload}
        case AddKostActions.SET_ROOM_OPTION :
            return {...state, roomOption:action.payload}
        case AddKostActions.SET_ROOM_COST_DAY :
            return {...state, roomCostDay:action.payload}
        case AddKostActions.SET_ROOM_COST_WEEK :
            return {...state, roomCostWeek:action.payload}
        case AddKostActions.SET_ROOM_COST_MONTH :
            return {...state, roomCostMonth:action.payload}
        case AddKostActions.SET_ROOM_PHOTOS :
            return {...state, roomPhotos:action.payload}
        case AddKostActions.RESET :
            return InitialAddKostState
    }
}

export const AddKostContext = createContext();

export const useAddKost = () => useContext(AddKostContext);

export const AddKostProvider = ({children}) => {
    const [state,dispatch] = useReducer(AddKostReducer,InitialAddKostState)
    const reset = () => {
        dispatch({
            type:AddKostActions.RESET
        })
    }
    return (
        <AddKostContext.Provider value={{...state, dispatch,reset}}>
            {children}
        </AddKostContext.Provider>
    )
}

export default AddKostProvider