import * as actionTypes from '../constants/cartConstants';
import axios from 'axios';

export const addToCart = (id, quantity) => async (dispatch) => {
    try { 
        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/product/getSingle/${id}`);

        dispatch({ type: actionTypes.ADD_TO_CART, payload: { ...data, quantity } 
            
        });

    } catch (error) {
        console.log('Error while calling cart API');
    }
};

export const removeFromCart = (id) => (dispatch) => {
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id
    })

};