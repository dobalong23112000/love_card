import 'bootstrap/dist/css/bootstrap.min.css';
import InputCustom from 'components/InputCustom';
import { AiOutlineMail, AiFillPhone, AiFillLock } from "react-icons/ai";

function App() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center" style={{ width: "342px", height: "496px", backgroundColor: "#ffdddd" }}>
      <div style={{ fontSize: "30px", lineHeight: "40px", fontWeight: "900", textAlign: "center", marginBottom: "19px" }} className='text'>ĐĂNG NHẬP</div>

      <div style={{ fontSize: "30px", lineHeight: "40px", fontWeight: "900", textAlign: "center", marginBottom: "19px" }} className='text-register'>ĐĂNG KÝ</div>
      <InputCustom icon={<AiOutlineMail size={12} />} placeholder='Email' />
      <div style={{ marginBottom: "41px" }}></div>
      <InputCustom icon={<AiFillPhone size={12} />} placeholder='Số điện thoại' />
      <div style={{ marginBottom: "41px" }} ></div>
      <InputCustom icon={<AiFillLock size={12} />} placeholder='Mật khẩu' />

    </div>
  );
}

export default App;
