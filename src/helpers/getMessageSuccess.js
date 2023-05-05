import Swal from 'sweetalert2';
import successGif from '../assets/images/done.gif'

const getMessageSuccess = (message = 'Lưu thông tin thành công') => {
    Swal.fire({
        position: 'center',
        title: `<div style="color: rgb(225, 143, 143); font-weight: bold">${message}</div>`,
        imageUrl: successGif,
        background: 'linear-gradient(to top, white, #FFABAB)',
        showConfirmButton: true,
        confirmButtonColor: '#FFABAB',
        confirmButtonText: '<div style="color: white;font-weight: bold;width: 135px;height: 30px;display: flex;align-items: center;justify-content: center;font-size: 18px">Đóng</div>',
    })
};

export default getMessageSuccess
