import * as types from '../constants/ActionTypes';
export function deleteTitle(id, type) {
    return (dispatch, getState) => {
        const listData = getState().data.myListData;
        listData.forEach((obj, i) => {
            obj[type].forEach((val, j) => {
                if( val.id == id){
                    listData[i][type].splice(j, 1);
                    listData[i]['recommendations'].push(val);
                }
            });
        });
        dispatch({
            type: types.DELETE_TITLE,
            myListData: listData,
        });
    }
}

export function addTitle(id, type) {
    return (dispatch, getState) => {
        const listData = getState().data.myListData;
        listData.forEach((obj, i) => {
            obj[type].forEach((val, j) => {
                if (val.id == id){
                    listData[i]['mylist'].push(val);
                    listData[i][type].splice(j, 1);
                }
            })
        })
        dispatch({
            type: types.ADD_TITLE,
            myListData: listData,
        });
    }
}