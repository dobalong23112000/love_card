/* eslint-disable eqeqeq */
import moment from 'moment';
import song_ngu from 'assets/images/song_ngu.png'
import kim_nguu from 'assets/images/kim_nguu.png'

import cu_giai from 'assets/images/cu_giai.png'
import xu_nu from 'assets/images/xu_nu.png'

import bach_duong from 'assets/images/bach_duong.png'
import su_tu from 'assets/images/su_tu.png'

import bo_cap from 'assets/images/bo_cap.png'
import thien_binh from 'assets/images/thien_binh.png'

import ma_ket from 'assets/images/ma_ket.png'
import nhan_ma from 'assets/images/nhan_ma.png'

import song_tu from 'assets/images/song_tu.png'
import bao_binh from 'assets/images/bao_binh.png'

function getZodiacSign(dateString) {
    // Create a moment object with the provided day and month
    const date = moment(dateString, 'DD-MM-YYYY');
    const day = date.date();
    const month = date.month() + 1;

    // Determine the zodiac sign based on the month and day
    // eslint-disable-next-line eqeqeq
    if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
        return bach_duong;
    } else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
        return kim_nguu;
    } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
        return song_tu;
    } else if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) {
        return cu_giai;
    } else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
        return su_tu;
    } else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
        return xu_nu;
    } else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) {
        return thien_binh;
    } else if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) {
        return bo_cap;
    } else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
        return nhan_ma;
    } else if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) {
        return ma_ket;
    } else if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {
        return bao_binh;
    } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
        return song_ngu;
    } else {
        return null;
    }
}
export default getZodiacSign