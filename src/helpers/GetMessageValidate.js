import Swal from 'sweetalert2';

const GetMessageValidate = (message = 'Có lỗi xảy ra') => {
    Swal.fire({
        position: 'center',
        icon: 'error',
        title: `<div style="color: rgb(225, 143, 143); font-weight: bold">${message}</div>`,
        showConfirmButton: true,
        confirmButtonColor: '#FFABAB',
        confirmButtonText: '<div style="color: white;font-weight: bold;width: 135px;height: 30px;display: flex;align-items: center;justify-content: center;font-size: 18px">Đóng</div>',
    })
};

export default GetMessageValidate
