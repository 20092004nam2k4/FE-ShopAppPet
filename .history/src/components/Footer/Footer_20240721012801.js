import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
    return (
        <footer className="bg-dark text-white pt-4 pb-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h5>LIÊN HỆ AZPET</h5>
                        <ul className="list-unstyled">
                            <li>Trụ Sở: 59 Văn Cao, Liễu Giai, Ba Đình, Hà Nội</li>
                            <li>Trại Giống: Quỳnh Hội, Quỳnh Phụ, Thái Bình</li>
                            <li>Hotline: 0888 08 3388</li>
                            <li>
                                Website: <a href="https://azpet.com.vn" className="text-white">https://azpet.com.vn</a>
                            </li>
                            <li>Email: contact@azpet.com.vn</li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>VỀ AZPET</h5>
                        <ul className="list-unstyled">
                            <li>Giới Thiệu Công Ty</li>
                            <li>Cơ Hội Nghề Nghiệp</li>
                            <li>Hợp Tác Nhân Giống</li>
                            <li>Cửa Hàng Phụ Kiện</li>
                            <li>Truyền Thông Nói Về AZPET</li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>CHÍNH SÁCH MUA HÀNG</h5>
                        <ul className="list-unstyled">
                            <li>Mua Trả Góp</li>
                            <li>Chính Sách Bảo Hành</li>
                            <li>Giao Nhận, Thanh toán</li>
                            <li>Chính Sách Bảo Mật</li>
                            <li>Điều Khoản Dịch Vụ</li>
                        </ul>
                    </div>
                    <div class="grid__col footer__col footer__col--widget">
                    <div id="azpet_icon_url-2" class="widget widget--footer widget_azpet_icon_url">
                    <p class="widget__title">Kết nối, thanh toán</p>
                    <ul class="f fw widget--icon-url-items mb-1 ">
                    <li class="widget--icon-url-item">
                    <a href="https://www.youtube.com/channel/UC_xsdcYZ6nAu66WJjHsQqVA">
                    <span class="icon_svg">
                    <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 16.6665C0 7.82995 7.16344 0.666504 16 0.666504C24.8366 0.666504 32 7.82995 32 16.6665C32 25.5031 24.8366 32.6665 16 32.6665C7.16344 32.6665 0 25.5031 0 16.6665Z" fill="#FF0000"></path><path d="M24.1768 12.7153C23.9805 11.9613 23.4022 11.3675 22.6679 11.166C21.3371 10.7998 16.0001 10.7998 16.0001 10.7998C16.0001 10.7998 10.6632 10.7998 9.3323 11.166C8.59795 11.3675 8.01962 11.9613 7.82335 12.7153C7.4668 14.0818 7.4668 16.9331 7.4668 16.9331C7.4668 16.9331 7.4668 19.7843 7.82335 21.151C8.01962 21.905 8.59795 22.4987 9.3323 22.7003C10.6632 23.0665 16.0001 23.0665 16.0001 23.0665C16.0001 23.0665 21.3371 23.0665 22.6679 22.7003C23.4022 22.4987 23.9805 21.905 24.1768 21.151C24.5335 19.7843 24.5335 16.9331 24.5335 16.9331C24.5335 16.9331 24.5335 14.0818 24.1768 12.7153Z" fill="white"></path><path d="M14.3999 19.8665V14.5332L18.6666 17.2L14.3999 19.8665Z" fill="#FF0000"></path></svg></span></a></li><li class="widget--icon-url-item"><a href="https://www.facebook.com/azpet.com.vn"><span class="icon_svg"><svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 16.6665C0 7.82995 7.16344 0.666504 16 0.666504C24.8366 0.666504 32 7.82995 32 16.6665C32 25.5031 24.8366 32.6665 16 32.6665C7.16344 32.6665 0 25.5031 0 16.6665Z" fill="#3B5998"></path><path d="M17.6676 26.0742V17.3693H20.0706L20.389 14.3696H17.6676L17.6717 12.8682C17.6717 12.0858 17.7461 11.6666 18.8698 11.6666H20.372V8.6665H17.9687C15.082 8.6665 14.066 10.1217 14.066 12.5689V14.3699H12.2666V17.3696H14.066V26.0742H17.6676Z" fill="white"></path></svg></span></a></li><li class="widget--icon-url-item"><a href="https://zalo.me/1468374330755950828"><span class="icon_svg"><svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 16.6665C0 7.82995 7.16344 0.666504 16 0.666504C24.8366 0.666504 32 7.82995 32 16.6665C32 25.5031 24.8366 32.6665 16 32.6665C7.16344 32.6665 0 25.5031 0 16.6665Z" fill="#3171F6"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M16.0002 5.99984C10.1091 5.99984 5.3335 10.4556 5.3335 15.9522C5.3335 19.0351 6.83597 21.7903 9.19473 23.6158V27.3332L12.8261 25.4565C13.8287 25.7477 14.8948 25.9046 16.0002 25.9046C21.8912 25.9046 26.6668 21.4488 26.6668 15.9522C26.6668 10.4556 21.8912 5.99984 16.0002 5.99984ZM9.87701 18.0804C10.6612 18.0804 11.3932 18.0759 12.125 18.0821C12.5362 18.0856 12.7584 18.2607 12.7962 18.5845C12.8442 18.9944 12.605 19.2664 12.1609 19.2714C11.3233 19.2809 10.4855 19.275 9.64768 19.275C9.40587 19.275 9.16349 19.2835 8.92244 19.2696C8.62187 19.2523 8.32787 19.1928 8.18415 18.8827C8.04006 18.5719 8.14015 18.293 8.33911 18.04C9.13968 17.0219 9.9412 16.0047 10.7422 14.9869C10.7898 14.9265 10.8357 14.8648 10.882 14.8043C10.833 14.7159 10.7554 14.7555 10.6949 14.7551C10.1336 14.7516 9.57215 14.7556 9.01082 14.7511C8.88254 14.7501 8.75044 14.7398 8.62701 14.7074C8.36663 14.6391 8.20854 14.4307 8.20644 14.182C8.20434 13.9329 8.35768 13.722 8.61749 13.6487C8.74025 13.6141 8.87282 13.6021 9.00111 13.6016C9.9252 13.5978 10.8493 13.5981 11.7734 13.6011C11.9367 13.6016 12.1011 13.6058 12.2597 13.6606C12.6101 13.7815 12.7643 14.1045 12.6219 14.4465C12.4978 14.7442 12.3001 14.9973 12.1027 15.2486C11.4252 16.1108 10.7452 16.9709 10.0663 17.8322C10.0136 17.899 9.96292 17.9676 9.87701 18.0804ZM14.0567 17.2472C14.0617 17.4255 14.1205 17.6652 14.2747 17.8732C14.6102 18.3257 15.2984 18.3243 15.6337 17.8723C15.9242 17.4805 15.9227 16.8304 15.6319 16.4389C15.4782 16.2321 15.273 16.1238 15.0169 16.1087C14.4487 16.0753 14.0509 16.5148 14.0567 17.2472ZM15.8889 15.3525C16.0151 15.1936 16.1404 15.0439 16.3538 15.0005C16.7609 14.9174 17.147 15.182 17.1525 15.596C17.1661 16.6319 17.161 17.668 17.1549 18.7041C17.1532 18.987 16.9789 19.2039 16.7239 19.2906C16.4567 19.3814 16.1783 19.3152 15.9998 19.09C15.9124 18.9797 15.875 18.9607 15.7531 19.0596C15.2812 19.4422 14.7489 19.5091 14.1735 19.3225C13.2505 19.023 12.8705 18.3038 12.7703 17.4228C12.6626 16.4766 12.9776 15.6645 13.8246 15.1666C14.5277 14.7532 15.2421 14.788 15.8889 15.3525ZM20.7838 17.1508C20.7824 17.416 20.8448 17.6634 21.0047 17.8783C21.3324 18.3189 22.0136 18.3224 22.348 17.8879C22.6494 17.4962 22.6504 16.8305 22.353 16.4346C22.1979 16.2282 21.9918 16.1217 21.7364 16.1082C21.1766 16.0785 20.7862 16.5065 20.7838 17.1508ZM19.4806 17.276C19.4411 15.9452 20.3142 14.9509 21.556 14.9127C22.8756 14.8721 23.8436 15.7594 23.883 17.0529C23.9229 18.3626 23.1194 19.2917 21.8803 19.416C20.5341 19.5509 19.4614 18.57 19.4806 17.276ZM19.0266 16.2455C19.0266 17.0484 19.0306 17.8513 19.025 18.6542C19.0218 19.1134 18.6166 19.4239 18.1809 19.3139C17.9192 19.2479 17.7236 18.9703 17.7231 18.6468C17.7211 17.2741 17.7223 15.9014 17.7223 14.5287C17.7223 14.287 17.7189 14.0451 17.7231 13.8035C17.7301 13.4051 17.9837 13.1465 18.3649 13.1428C18.7586 13.1389 19.0226 13.3985 19.0252 13.811C19.0302 14.6225 19.0266 15.434 19.0266 16.2455Z" fill="white"></path></svg></span></a></li></ul></div><!-- Close widget --><div id="azpet_icon_url-3" class="widget widget--footer widget_azpet_icon_url"><ul class="f fw widget--icon-url-items "><li class="widget--icon-url-item"><a href="#"><span class="icon_svg"><svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.17957 6.6665C3.05501 6.6665 3.76471 7.37619 3.76471 8.25164V8.54886H11.6637C12.8114 8.54886 13.3324 8.8915 14.2358 10.0787L15.8465 12.3136H30.2624C31.222 12.3136 32 13.1068 32 14.0852V25.6008C32 26.5792 31.222 27.3724 30.2624 27.3724H11.1493C10.1897 27.3724 9.41174 26.5792 9.41174 25.6008V20.3498H8.03056C7.20288 20.3498 6.41436 19.9729 5.68079 19.3563C5.51511 19.217 5.35997 19.0716 5.21619 18.924L4.96562 18.652L4.906 18.5825L3.73127 18.5832C3.58119 19.3026 2.94348 19.843 2.17957 19.843H1.58514C0.709691 19.843 0 19.1333 0 18.2578V8.25164C0 7.37619 0.709691 6.6665 1.58514 6.6665H2.17957ZM3.76471 17.6423H5.3697L5.542 17.8741L5.64335 17.9969C5.66442 18.0215 5.68754 18.048 5.71264 18.0762C5.88231 18.2671 6.07526 18.4583 6.28641 18.6358C6.80818 19.0744 7.34414 19.3496 7.85956 19.4002L8.03056 19.4087H9.41174V16.7807L8.78495 16.7809C7.74476 16.7809 7.00673 16.4227 6.5663 15.8019L6.47647 15.6649C6.23717 15.2693 6.14194 14.8715 6.12188 14.4795L6.11768 14.3119H7.05885C7.05885 14.6016 7.11528 14.9025 7.28177 15.1777C7.51253 15.5592 7.9174 15.7976 8.5937 15.8346L8.78495 15.8397H10.6145L12.0877 17.1837C12.6209 17.5716 13.4146 17.5821 14.0576 17.2702C14.5588 17.0271 14.6664 16.8014 14.5092 16.6584L11.2886 13.7286L11.2941 12.5251V12.3136H14.7371L13.5291 10.6377C12.7952 9.67451 12.5004 9.48067 11.6637 9.48067H3.76471V17.6423ZM2.17957 7.45907H1.58514C1.18109 7.45907 0.847652 7.76143 0.798745 8.15223L0.79257 8.25164V18.2578C0.79257 18.6619 1.09492 18.9953 1.48572 19.0442L1.58514 19.0504H2.17957C2.58362 19.0504 2.91705 18.7481 2.96596 18.3573L2.97214 18.2578V8.25164C2.97214 7.84759 2.66978 7.51416 2.27898 7.46525L2.17957 7.45907ZM10.3529 25.5528V16.8741L11.4942 17.9124L11.6621 18.0256C12.5171 18.5551 13.5921 18.5421 14.4684 18.117C15.4765 17.628 15.9294 16.6781 15.1425 15.9622L12.1664 13.2547H30.1961C30.6725 13.2547 31.0588 13.648 31.0588 14.1332V25.5528C31.0588 26.0379 30.6725 26.4312 30.1961 26.4312H11.2157C10.7392 26.4312 10.3529 26.0379 10.3529 25.5528Z" fill="#052E5C"></path><circle cx="20.7059" cy="19.843" r="4.70588" fill="#0B74E5"></circle><path d="M21.5934 19.6898L20.0494 19.3178C19.8206 19.2623 19.6604 19.0838 19.6604 18.8833C19.6604 18.634 19.9006 18.4315 20.1955 18.4315H21.1605C21.3759 18.4315 21.5809 18.488 21.7521 18.593C21.8303 18.6408 21.9409 18.6252 22.0094 18.5674L22.3079 18.3155C22.3994 18.2382 22.3848 18.1121 22.2821 18.0457C21.9615 17.8381 21.5715 17.7256 21.1605 17.7256H21.1244V17.1959C21.1244 17.0984 21.0308 17.0194 20.9153 17.0194H20.497C20.3814 17.0194 20.2878 17.0984 20.2878 17.1959V17.7254H20.1955C19.3958 17.7254 18.7542 18.3055 18.8298 18.9933C18.8836 19.4822 19.3281 19.8784 19.8873 20.0129L21.3629 20.3683C21.5916 20.4239 21.7519 20.6024 21.7519 20.8029C21.7519 21.0522 21.5116 21.2547 21.2167 21.2547H20.2517C20.0363 21.2547 19.8314 21.1982 19.6601 21.0932C19.5819 21.0453 19.4714 21.061 19.4029 21.1188L19.1043 21.3707C19.0128 21.4479 19.0274 21.5739 19.1302 21.6405C19.4507 21.8481 19.8408 21.9606 20.2517 21.9606H20.2878V22.49C20.2878 22.5875 20.3814 22.6665 20.497 22.6665H20.9153C21.0308 22.6665 21.1244 22.5875 21.1244 22.49V21.9606H21.16C21.7563 21.9606 22.3189 21.6608 22.5121 21.1848C22.7775 20.5309 22.3218 19.8658 21.5934 19.6898Z" fill="white"></path></svg></span></a></li><li class="widget--icon-url-item"><a href="#"><span class="icon_svg"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_1329:61134" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="6" width="32" height="20"><rect y="6" width="32" height="20" rx="1.81818" fill="white"></rect></mask><g mask="url(#mask0_1329:61134)"><rect opacity="0.01" x="-1" y="4" width="34.04" height="23" fill="white"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M9.8116 10.6916L7.26655 17.2114L6.23703 11.6676C6.11637 11.0489 5.63944 10.6916 5.10955 10.6916H0.949103L0.891235 10.9696C1.74526 11.1578 2.7154 11.4606 3.30354 11.7849C3.66323 11.9827 3.76572 12.156 3.88411 12.6263L5.83384 20.2704H8.41786L12.3794 10.6916H9.8116ZM13.4285 10.6916L11.4062 20.2704H13.8514L15.8726 10.6916H13.4285ZM27.4466 13.2791L28.1868 16.8763H26.1588L27.4466 13.2791ZM27.0873 10.6916C26.6187 10.6916 26.2234 10.9688 26.0472 11.3943L22.3792 20.2704H24.945L25.4556 18.8405H28.5911L28.8876 20.2704H31.149L29.1754 10.6916H27.0873ZM16.5398 13.6828C16.5224 15.062 17.7528 15.8321 18.6794 16.2895C19.6318 16.7594 19.9514 17.0603 19.948 17.4805C19.9408 18.1229 19.1881 18.4066 18.4842 18.4177C17.2558 18.4373 16.5417 18.0815 15.9736 17.8128L15.5311 19.9112C16.1007 20.1776 17.1555 20.4095 18.2497 20.4199C20.8175 20.4199 22.4972 19.1353 22.5063 17.1431C22.5165 14.6154 19.0565 14.4755 19.0799 13.3455C19.0883 13.0031 19.4109 12.6374 20.1178 12.5447C20.4676 12.4975 21.4332 12.4615 22.5282 12.9725L22.9579 10.9423C22.3693 10.725 21.6125 10.5168 20.67 10.5168C18.2531 10.5168 16.5534 11.8186 16.5398 13.6828Z" fill="#1A1F71"></path></g></svg></span></a></li><li class="widget--icon-url-item"><a href="#"><span class="icon_svg"><svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg"><rect opacity="0.01" x="1" y="6.6665" width="30" height="20" fill="white"></rect><rect x="12.3877" y="10.1254" width="7.17949" height="12.9247" fill="#FF5F00"></rect><path d="M12.8434 16.5889C12.8407 14.0664 13.9964 11.6828 15.9773 10.1254C12.6131 7.47702 7.78209 7.86278 4.87927 11.0116C1.97644 14.1604 1.97644 19.0151 4.87927 22.1639C7.78209 25.3127 12.6131 25.6985 15.9773 23.0501C13.997 21.4931 12.8414 19.1106 12.8434 16.5889Z" fill="#EB001B"></path><path d="M29.2539 16.5889C29.2538 19.7358 27.46 22.6064 24.6343 23.9815C21.8087 25.3567 18.4472 24.995 15.9775 23.0501C17.9569 21.4918 19.1126 19.1096 19.1126 16.5877C19.1126 14.0659 17.9569 11.6837 15.9775 10.1254C18.4472 8.18045 21.8087 7.81875 24.6343 9.19392C27.46 10.5691 29.2538 13.4397 29.2539 16.5866V16.5889Z" fill="#F79E1B"></path></svg></span></a></li><li class="widget--icon-url-item"><a href="#"><span class="icon_svg"><svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg"><rect opacity="0.01" y="5.6665" width="32" height="21.3333" fill="white"></rect><path d="M29.5619 22.6087C29.5619 24.9501 27.6552 26.8567 25.3138 26.8567H2.2002V10.0317C2.2002 7.6902 4.10682 5.78358 6.44828 5.78358H29.5619V22.6087Z" fill="white"></path><path d="M22.0356 18.2937H23.7917C23.8419 18.2937 23.959 18.277 24.0092 18.277C24.3437 18.2101 24.628 17.909 24.628 17.4909C24.628 17.0895 24.3437 16.7885 24.0092 16.7048C23.959 16.6881 23.8586 16.6881 23.7917 16.6881H22.0356V18.2937Z" fill="url(#paint0_linear)"></path><path d="M23.5909 7.20518C21.9184 7.20518 20.547 8.55988 20.547 10.2491V13.4101H24.8453C24.9456 13.4101 25.0627 13.4101 25.1463 13.4268C26.1163 13.477 26.8355 13.9787 26.8355 14.8484C26.8355 15.5341 26.3505 16.1195 25.4473 16.2365V16.27C26.4341 16.3369 27.1867 16.8888 27.1867 17.7418C27.1867 18.6616 26.3505 19.2637 25.2467 19.2637H20.5303V25.4519H24.9958C26.6683 25.4519 28.0397 24.0972 28.0397 22.408V7.20518H23.5909Z" fill="url(#paint1_linear)"></path><path d="M24.4106 15.0491C24.4106 14.6477 24.1262 14.3801 23.7917 14.3299C23.7583 14.3299 23.6747 14.3132 23.6245 14.3132H22.0356V15.785H23.6245C23.6747 15.785 23.775 15.785 23.7917 15.7682C24.1262 15.7181 24.4106 15.4505 24.4106 15.0491Z" fill="url(#paint2_linear)"></path><path d="M6.76619 7.20518C5.09372 7.20518 3.72229 8.55988 3.72229 10.2491V17.7585C4.57525 18.1766 5.46166 18.4442 6.34808 18.4442C7.40173 18.4442 7.97038 17.8087 7.97038 16.939V13.3933H10.5794V16.9223C10.5794 18.2937 9.72647 19.4142 6.83309 19.4142C5.077 19.4142 3.70557 19.0296 3.70557 19.0296V25.4351H8.17107C9.84355 25.4351 11.215 24.0804 11.215 22.3912V7.20518H6.76619Z" fill="url(#paint3_linear)"></path><path d="M15.1787 7.20518C13.5062 7.20518 12.1348 8.55988 12.1348 10.2491V14.2296C12.9041 13.5773 14.2421 13.1592 16.3996 13.2595C17.5536 13.3097 18.7912 13.6275 18.7912 13.6275V14.9153C18.1724 14.5975 17.4365 14.3132 16.4832 14.2463C14.8442 14.1292 13.8574 14.932 13.8574 16.3369C13.8574 17.7585 14.8442 18.5613 16.4832 18.4275C17.4365 18.3606 18.1724 18.0595 18.7912 17.7585V19.0463C18.7912 19.0463 17.5703 19.3641 16.3996 19.4142C14.2421 19.5146 12.9041 19.0965 12.1348 18.4442V25.4686H16.6003C18.2727 25.4686 19.6442 24.1139 19.6442 22.4247V7.20518H15.1787Z" fill="url(#paint4_linear)"></path><defs><linearGradient id="paint0_linear" x1="20.5439" y1="19.8203" x2="28.0604" y2="19.8203" gradientUnits="userSpaceOnUse"><stop stop-color="#007940"></stop><stop offset="0.2285" stop-color="#00873F"></stop><stop offset="0.7433" stop-color="#40A737"></stop><stop offset="1" stop-color="#5CB531"></stop></linearGradient><linearGradient id="paint1_linear" x1="20.544" y1="25.4526" x2="28.0602" y2="25.4526" gradientUnits="userSpaceOnUse"><stop stop-color="#007940"></stop><stop offset="0.2285" stop-color="#00873F"></stop><stop offset="0.7433" stop-color="#40A737"></stop><stop offset="1" stop-color="#5CB531"></stop></linearGradient><linearGradient id="paint2_linear" x1="20.5438" y1="17.3754" x2="28.0598" y2="17.3754" gradientUnits="userSpaceOnUse"><stop stop-color="#007940"></stop><stop offset="0.2285" stop-color="#00873F"></stop><stop offset="0.7433" stop-color="#40A737"></stop><stop offset="1" stop-color="#5CB531"></stop></linearGradient><linearGradient id="paint3_linear" x1="3.71849" y1="25.5849" x2="11.3507" y2="25.5849" gradientUnits="userSpaceOnUse"><stop stop-color="#1F286F"></stop><stop offset="0.4751" stop-color="#004E94"></stop><stop offset="0.8261" stop-color="#0066B1"></stop><stop offset="1" stop-color="#006FBC"></stop></linearGradient><linearGradient id="paint4_linear" x1="12.0913" y1="25.3346" x2="19.5036" y2="25.3346" gradientUnits="userSpaceOnUse"><stop stop-color="#6C2C2F"></stop><stop offset="0.1735" stop-color="#882730"></stop><stop offset="0.5731" stop-color="#BE1833"></stop><stop offset="0.8585" stop-color="#DC0436"></stop><stop offset="1" stop-color="#E60039"></stop></linearGradient></defs></svg></span></a></li><li class="widget--icon-url-item"><a href="#"><span class="icon_svg"><svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M30 10.3615C30 8.8731 28.7934 7.6665 27.305 7.6665H4.695C3.20659 7.6665 2 8.8731 2 10.3615V22.9715C2 24.4599 3.20659 25.6665 4.695 25.6665H27.305C28.7934 25.6665 30 24.4599 30 22.9715V10.3615ZM4.695 8.6665H27.305L27.4513 8.67273C28.3189 8.74688 29 9.47465 29 10.3615V22.9715L28.9938 23.1178C28.9196 23.9854 28.1919 24.6665 27.305 24.6665H4.695L4.54875 24.6603C3.6811 24.5861 3 23.8584 3 22.9715V10.3615L3.00622 10.2153C3.08037 9.3476 3.80815 8.6665 4.695 8.6665Z" fill="#052E5C"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8.67528 20.2746L8.14557 21.881H7L9.205 15.6665H10.4582L12.6632 21.881H11.4918L10.9621 20.2746H8.67528ZM8.93368 19.4176H10.6994L9.83377 16.7647H9.80362L8.93368 19.4176ZM15.9535 21.881V16.6054H17.8097V15.6665H12.9862V16.6054H14.8467V21.881H15.9535ZM19.5711 17.471V21.881H18.5676V15.6665H19.8553L21.7589 20.4081H21.7933L23.6968 15.6665H24.9802V21.881H23.9811V17.471H23.9509L22.1551 21.881H21.3971L19.6012 17.471H19.5711Z" fill="#052E5C"></path><rect x="22" y="10.6665" width="5" height="3" rx="1" fill="#0B74E5"></rect></svg></span></a></li><li class="widget--icon-url-item"><a href="#"><span class="icon_svg"><svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.84552 7.93196L26.906 5.14548C25.8411 4.2238 24.4546 3.6665 22.9395 3.6665H9.06047C5.70863 3.6665 3 6.38153 3 9.72531V23.5934C3 26.6014 5.19406 29.1021 8.06707 29.5736L5.54426 11.0185C5.32985 9.5324 6.38043 8.14631 7.84552 7.93196Z" fill="#0068FF"></path><path d="M26.906 5.14589L7.84551 7.93237C6.38042 8.14671 5.33698 9.53995 5.55139 11.0261L8.06706 29.5812C8.38866 29.6312 8.72456 29.6669 9.06046 29.6669H22.9395C26.2914 29.6669 29 26.9519 29 23.6081V9.71857C28.9928 7.8895 28.1924 6.25334 26.906 5.14589Z" fill="white"></path><path d="M26.9059 5.14589L26.8416 5.16018C28.1495 6.30335 28.9356 7.98953 28.9356 9.72572V23.5795C28.9356 26.8947 26.2341 29.5955 22.918 29.5955H9.05328C8.73883 29.5955 8.37434 29.5597 8.05273 29.5097L8.05988 29.5812C8.39578 29.6383 8.71739 29.6669 9.04614 29.6669H22.8966C26.2556 29.6669 28.9857 26.9376 28.9857 23.5795V9.71857C28.9928 7.94666 28.2424 6.30335 26.9059 5.14589Z" fill="#B3B3B3"></path><path d="M19.1943 12.2909C19.0728 12.1695 18.937 12.1052 18.744 12.1052C18.4867 12.1052 18.2938 12.2266 18.1794 12.4838C17.9221 12.1766 17.5648 12.0337 17.1146 12.0337C16.5714 12.0337 16.1212 12.2481 15.7424 12.6482C15.3636 13.0769 15.1992 13.5699 15.1992 14.1629C15.1992 14.7559 15.385 15.2703 15.7424 15.6776C16.1212 16.1063 16.5714 16.292 17.1146 16.292C17.5648 16.292 17.915 16.1491 18.1794 15.8419C18.3009 16.0991 18.4867 16.2206 18.744 16.2206C18.9298 16.2206 19.0728 16.1491 19.1943 16.0348C19.3158 15.9205 19.3586 15.7776 19.3586 15.5847V12.6768C19.3801 12.5767 19.3086 12.4124 19.1943 12.2909ZM17.9079 14.9131C17.7649 15.0988 17.5505 15.1989 17.2932 15.1989C17.0359 15.1989 16.8215 15.106 16.6786 14.9131C16.5357 14.7273 16.4428 14.4844 16.4428 14.1772C16.4428 13.8914 16.5142 13.6556 16.6786 13.4698C16.8215 13.2841 17.0359 13.184 17.2932 13.184C17.5505 13.184 17.7649 13.2769 17.9079 13.4698C18.0508 13.6556 18.1437 13.8985 18.1437 14.1772C18.1223 14.463 18.0508 14.7345 17.9079 14.9131Z" fill="#0068FF"></path><path d="M20.7665 16.0699C20.645 16.1914 20.5092 16.2557 20.3163 16.2557C20.1305 16.2557 19.9875 16.1842 19.866 16.0699C19.7445 15.9485 19.7017 15.8127 19.7017 15.6198V10.4184C19.7017 10.254 19.7517 10.1111 19.866 9.96825C19.9875 9.84678 20.1233 9.78248 20.3163 9.78248C20.5021 9.78248 20.645 9.85393 20.7665 9.96825C20.888 10.0897 20.9309 10.2255 20.9309 10.4184V15.6198C20.9381 15.8127 20.888 15.9556 20.7665 16.0699Z" fill="#0068FF"></path><path d="M24.8544 12.6696C24.4542 12.2409 23.9539 12.0552 23.3393 12.0552C22.7246 12.0552 22.2315 12.2695 21.8241 12.6696C21.4454 13.0697 21.231 13.5913 21.231 14.2057C21.231 14.8202 21.4168 15.3132 21.8241 15.7419C22.2029 16.142 22.7246 16.3563 23.3393 16.3563C23.9539 16.3563 24.447 16.142 24.8544 15.7419C25.2332 15.3418 25.419 14.8202 25.419 14.2272C25.4547 13.5913 25.2689 13.0769 24.8544 12.6696ZM23.9825 14.9131C23.8395 15.0988 23.6251 15.1989 23.3678 15.1989C23.1106 15.1989 22.8962 15.106 22.7532 14.9131C22.6103 14.7273 22.5174 14.4844 22.5174 14.1772C22.5174 13.8914 22.5888 13.6556 22.7532 13.4698C22.8962 13.2841 23.1106 13.184 23.3678 13.184C23.6251 13.184 23.8395 13.2769 23.9825 13.4698C24.1254 13.6556 24.2183 13.8985 24.2183 14.1772C24.1969 14.463 24.1254 14.7345 23.9825 14.9131Z" fill="#0068FF"></path><path d="M14.5132 12.1976C14.942 11.6332 15.1779 11.2545 15.1779 11.0616C15.1779 10.6114 14.892 10.3757 14.3274 10.3757H11.3257C11.0899 10.3757 10.8969 10.4257 10.7826 10.54C10.6611 10.6615 10.5968 10.7972 10.5968 10.9687C10.5968 11.1544 10.6682 11.2973 10.7826 11.3974C10.9041 11.5188 11.0899 11.5617 11.3257 11.5617H13.384L10.7397 14.9626C10.5753 15.177 10.4824 15.3913 10.4824 15.5557C10.4824 16.0486 10.8112 16.2916 11.4758 16.2916H14.5704C15.0635 16.2916 15.3065 16.0772 15.3065 15.6771C15.3065 15.2484 15.0707 15.0627 14.5704 15.0627H12.2977L14.5132 12.1976Z" fill="#0068FF"></path><path d="M13.0412 19.5572H12.2622V21.1652H13.0412C13.277 21.1652 13.47 21.0938 13.6058 20.9294C13.7487 20.7865 13.8202 20.5721 13.8202 20.3648C13.8202 20.129 13.7487 19.936 13.6058 19.8002C13.47 19.6287 13.2842 19.5572 13.0412 19.5572Z" fill="#39B54A"></path><path d="M16.9001 21.0356C16.6642 21.0356 16.4713 21.1285 16.3355 21.2928C16.1926 21.4787 16.1211 21.6931 16.1211 21.9575C16.1211 22.2219 16.1926 22.4506 16.3355 22.6221C16.4784 22.808 16.6642 22.8794 16.9001 22.8794C17.1359 22.8794 17.3289 22.7865 17.4647 22.6221C17.6076 22.4363 17.6791 22.2219 17.6791 21.9575C17.6791 21.7002 17.6076 21.4644 17.4647 21.2928C17.3146 21.1285 17.1288 21.0356 16.9001 21.0356Z" fill="#39B54A"></path><path d="M22.3389 17.2631H11.147C10.7682 17.2631 10.4609 17.5703 10.4609 17.949V24.4937C10.4609 24.8723 10.7682 25.1796 11.147 25.1796H19.9662C19.8733 25.0867 19.8232 24.9938 19.8232 24.8723C19.8232 24.7795 19.8447 24.6866 19.8947 24.5651L20.3235 23.6434L19.1657 20.7569C19.1443 20.6855 19.1157 20.5926 19.1157 20.4997C19.1157 20.3782 19.1657 20.2639 19.2801 20.1925C19.373 20.0996 19.4945 20.0496 19.6088 20.0496C19.8661 20.0496 20.0376 20.171 20.1305 20.4283L20.8381 22.3931L21.5956 20.4283C21.6885 20.1925 21.8529 20.0496 22.1173 20.0496C22.2388 20.0496 22.3532 20.0996 22.4461 20.1925C22.539 20.2854 22.6105 20.3782 22.6105 20.4997C22.6105 20.5926 22.589 20.6855 22.5604 20.7569L20.8595 24.8938C20.8095 25.0152 20.7666 25.1081 20.6951 25.1796H22.3246C22.7034 25.1796 23.0107 24.8723 23.0107 24.4937V17.949C23.0178 17.5489 22.7034 17.2631 22.3389 17.2631ZM14.4417 21.6572C14.0844 21.9858 13.6413 22.1287 13.1195 22.1287H12.2691V23.3576C12.2691 23.5434 12.219 23.6863 12.1047 23.7863C12.0118 23.8792 11.8689 23.9507 11.7045 23.9507C11.5401 23.9507 11.3972 23.9006 11.3043 23.7863C11.2113 23.6934 11.1399 23.5291 11.1399 23.3576V19.1065C11.1399 18.7064 11.3257 18.5134 11.7331 18.5134H13.0838C13.6484 18.5134 14.0987 18.6778 14.4774 19.0064C14.8348 19.3351 15.0206 19.7852 15.0206 20.3068C15.0063 20.8927 14.8133 21.3214 14.4417 21.6572ZM18.8084 23.3362C18.8084 23.5005 18.7584 23.622 18.644 23.7363C18.5225 23.8578 18.4082 23.9006 18.2438 23.9006C18.0079 23.9006 17.815 23.7792 17.7006 23.5434C17.4648 23.8292 17.136 23.9721 16.7072 23.9721C16.2141 23.9721 15.7853 23.7863 15.4565 23.4076C15.1278 23.029 14.9348 22.5574 14.9348 21.993C14.9348 21.4285 15.0992 20.9784 15.4565 20.5783C15.7853 20.1996 16.2141 20.0139 16.7072 20.0139C17.136 20.0139 17.4433 20.1568 17.7006 20.4425C17.8221 20.2068 17.9865 20.0853 18.2438 20.0853C18.4082 20.0853 18.5511 20.1353 18.644 20.2496C18.7655 20.3711 18.8084 20.4854 18.8084 20.6497V23.3362Z" fill="#39B54A"></path></svg></span></a></li><li class="widget--icon-url-item"><a href="#"><span class="icon_svg"><svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="3" y="3" width="26" height="27"><path d="M10.6917 3.6665L21.3083 3.6665C23.9829 3.6665 24.9528 3.94498 25.9305 4.4679C26.9083 4.99082 27.6757 5.75819 28.1986 6.73597C28.7215 7.71374 29 8.6836 29 11.3582V21.9748C29 24.6494 28.7215 25.6193 28.1986 26.597C27.6757 27.5748 26.9083 28.3422 25.9305 28.8651C24.9528 29.388 23.9829 29.6665 21.3083 29.6665H10.6917C8.0171 29.6665 7.04724 29.388 6.06946 28.8651C5.09169 28.3422 4.32432 27.5748 3.8014 26.597C3.27848 25.6193 3 24.6494 3 21.9748L3 11.3582C3 8.6836 3.27848 7.71374 3.8014 6.73597C4.32432 5.75819 5.09169 4.99082 6.06946 4.4679C7.04724 3.94498 8.0171 3.6665 10.6917 3.6665Z" fill="white"></path></mask><g mask="url(#mask0)"><path d="M10.6917 3.6665L21.3083 3.6665C23.9829 3.6665 24.9528 3.94498 25.9305 4.4679C26.9083 4.99082 27.6757 5.75819 28.1986 6.73597C28.7215 7.71374 29 8.6836 29 11.3582V21.9748C29 24.6494 28.7215 25.6193 28.1986 26.597C27.6757 27.5748 26.9083 28.3422 25.9305 28.8651C24.9528 29.388 23.9829 29.6665 21.3083 29.6665H10.6917C8.0171 29.6665 7.04724 29.388 6.06946 28.8651C5.09169 28.3422 4.32432 27.5748 3.8014 26.597C3.27848 25.6193 3 24.6494 3 21.9748L3 11.3582C3 8.6836 3.27848 7.71374 3.8014 6.73597C4.32432 5.75819 5.09169 4.99082 6.06946 4.4679C7.04724 3.94498 8.0171 3.6665 10.6917 3.6665Z" fill="#A50064"></path><path d="M21.1624 8.6665C19.0427 8.6665 17.3247 10.2823 17.3247 12.2755C17.3247 14.269 19.0427 15.8849 21.1624 15.8849C23.2819 15.8849 25 14.269 25 12.2755C25 10.2823 23.2819 8.6665 21.1624 8.6665ZM21.1624 13.8159C20.2632 13.8159 19.5325 13.1289 19.5325 12.2833C19.5325 11.4376 20.2632 10.7505 21.1624 10.7505C22.0615 10.7505 22.7922 11.4376 22.7922 12.2833C22.7922 13.1289 22.0615 13.8161 21.1624 13.8161V13.8159ZM16.2168 15.8927H14.0089V11.3546C14.0089 11.0148 13.7198 10.7433 13.3587 10.7433C12.9974 10.7433 12.7083 11.0148 12.7083 11.3546V15.8927H10.5006V11.3546C10.5006 11.0148 10.2117 10.7433 9.85038 10.7433C9.48906 10.7433 9.19994 11.0148 9.19994 11.3546V15.8927H7V11.3772C7 9.8822 8.29262 8.6665 9.88225 8.6665C10.5325 8.6665 11.1267 8.87041 11.6084 9.21008C12.1645 8.84769 12.7399 8.6665 13.3345 8.6665C14.9241 8.6665 16.2168 9.8822 16.2168 11.3772V15.8927ZM21.1624 17.4481C19.0427 17.4481 17.3247 19.0638 17.3247 21.0571C17.3247 23.0506 19.0427 24.6665 21.1624 24.6665C23.2819 24.6663 25 23.0504 25 21.0571C25 19.0638 23.2819 17.4479 21.1624 17.4479V17.4481ZM13.3345 17.4397C14.9241 17.4397 16.2168 18.6554 16.2168 20.1504V24.6659H14.0089V20.1279C14.0089 19.788 13.7198 19.5165 13.3587 19.5165C12.9974 19.5165 12.7083 19.788 12.7083 20.1279V24.6659H10.5006V20.1279C10.5006 19.788 10.2117 19.5165 9.85038 19.5165C9.48906 19.5165 9.19994 19.788 9.19994 20.1279V24.6659H7V20.1504C7 18.6554 8.29262 17.4397 9.88225 17.4397C10.5325 17.4397 11.1267 17.6437 11.6084 17.9833C12.1645 17.6209 12.7399 17.4397 13.3345 17.4397ZM21.1624 19.532C22.0615 19.532 22.7922 20.2191 22.7922 21.0649C22.7922 21.9104 22.0615 22.5975 21.1624 22.5975C20.2632 22.5975 19.5325 21.9104 19.5325 21.0649C19.5325 20.2191 20.2632 19.532 21.1624 19.532Z" fill="white"></path></g></svg></span></a></li><li class="widget--icon-url-item"><a href="#"><span class="icon_svg"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 10.5C5.5 4.70101 10.201 0 16 0C21.799 0 26.5 4.70101 26.5 10.5C26.5 16.299 21.799 21 16 21C10.201 21 5.5 16.299 5.5 10.5ZM16 1C10.7533 1 6.5 5.25329 6.5 10.5C6.5 15.7467 10.7533 20 16 20C21.2467 20 25.5 15.7467 25.5 10.5C25.5 5.25329 21.2467 1 16 1Z" fill="#052E5C"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M22.4646 7.70199C22.6599 7.89725 22.6599 8.21383 22.4646 8.4091L17.5757 13.298C17.3805 13.4932 17.0639 13.4932 16.8686 13.298C16.6734 13.1027 16.6734 12.7861 16.8686 12.5909L21.7575 7.70199C21.9528 7.50673 22.2693 7.50673 22.4646 7.70199Z" fill="#0B74E5"></path><path d="M18.5555 8.05547C18.5555 8.45435 18.2322 8.7777 17.8333 8.7777C17.4344 8.7777 17.1111 8.45435 17.1111 8.05547C17.1111 7.6566 17.4344 7.33325 17.8333 7.33325C18.2322 7.33325 18.5555 7.6566 18.5555 8.05547Z" fill="#0B74E5" stroke="#0B74E5"></path><path d="M22.2223 12.9445C22.2223 13.3434 21.8989 13.6667 21.5001 13.6667C21.1012 13.6667 20.7778 13.3434 20.7778 12.9445C20.7778 12.5456 21.1012 12.2223 21.5001 12.2223C21.8989 12.2223 22.2223 12.5456 22.2223 12.9445Z" fill="#0B74E5" stroke="#0B74E5"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M10.8541 8.29176C10.5279 8.90744 10.3889 9.73418 10.3889 10.4999C10.3889 11.2656 10.528 12.0924 10.8543 12.7081C11.1684 13.3007 11.6306 13.6666 12.3334 13.6666C13.0361 13.6666 13.4984 13.3007 13.8125 12.7081C14.1387 12.0924 14.2778 11.2656 14.2778 10.4999C14.2778 9.73418 14.1389 8.90744 13.8126 8.29176C13.4986 7.69915 13.0364 7.33325 12.3334 7.33325C11.6303 7.33325 11.1681 7.69915 10.8541 8.29176ZM9.97048 7.82355C10.4128 6.98878 11.1728 6.33325 12.3334 6.33325C13.4939 6.33325 14.2539 6.98878 14.6962 7.82355C15.1263 8.63525 15.2778 9.64185 15.2778 10.4999C15.2778 11.358 15.1262 12.3646 14.696 13.1763C14.2537 14.011 13.4937 14.6666 12.3334 14.6666C11.173 14.6666 10.413 14.011 9.97068 13.1763C9.54052 12.3646 9.38892 11.358 9.38892 10.4999C9.38892 9.64185 9.54038 8.63525 9.97048 7.82355Z" fill="#0B74E5"></path><path d="M4.39832 26.1434H2.66946V30.9236H1.71363V26.1434H0V25.3645H4.39832V26.1434Z" fill="#052E5C"></path><path d="M7.16679 28.7817H6.09291V30.9236H5.12947V25.3645H7.0792C7.71896 25.3645 8.21274 25.5083 8.56054 25.796C8.90835 26.0836 9.08225 26.4998 9.08225 27.0445C9.08225 27.4161 8.99212 27.7279 8.81187 27.9799C8.63416 28.2294 8.38537 28.4215 8.06549 28.5564L9.31073 30.874V30.9236H8.27874L7.16679 28.7817ZM6.09291 28.0066H7.08301C7.40797 28.0066 7.66184 27.9252 7.84462 27.7623C8.02741 27.5968 8.11881 27.3716 8.11881 27.0865C8.11881 26.7887 8.03376 26.5583 7.86367 26.3954C7.69611 26.2325 7.44478 26.1485 7.10967 26.1434H6.09291V28.0066Z" fill="#052E5C"></path><path d="M13.0998 29.6293H10.952L10.5027 30.9236H9.50113L11.5956 25.3645H12.46L14.5583 30.9236H13.5529L13.0998 29.6293ZM11.2224 28.8504H12.8294L12.0259 26.5443L11.2224 28.8504ZM11.7098 24.9293L11.6832 24.3718C11.8685 24.3591 12.0018 24.3349 12.083 24.2993C12.1668 24.2636 12.2087 24.2013 12.2087 24.1122C12.2087 23.9289 12.0183 23.8373 11.6375 23.8373L11.6641 23.3677C12.0932 23.3677 12.4156 23.4339 12.6314 23.5662C12.8497 23.6986 12.9589 23.8768 12.9589 24.1007C12.9589 24.2535 12.9094 24.3795 12.8103 24.4787C12.7113 24.578 12.5704 24.6404 12.3877 24.6658V24.9293H11.7098Z" fill="#052E5C"></path><path d="M21.3823 30.202C21.1818 30.4642 20.9038 30.6627 20.5483 30.7976C20.1929 30.9325 19.7893 31 19.3374 31C18.8728 31 18.4615 30.8944 18.1036 30.6831C17.7456 30.4718 17.4689 30.1702 17.2734 29.7782C17.0805 29.3837 16.9802 28.9242 16.9726 28.3999V27.9646C16.9726 27.1247 17.1731 26.4692 17.5742 25.9983C17.9754 25.5249 18.5351 25.2882 19.2536 25.2882C19.8705 25.2882 20.3605 25.4409 20.7235 25.7463C21.0866 26.0518 21.3049 26.4921 21.3785 27.0674H20.4341C20.3275 26.398 19.9403 26.0632 19.2726 26.0632C18.8411 26.0632 18.5123 26.2198 18.2864 26.5329C18.0629 26.8434 17.9474 27.3003 17.9398 27.9035V28.3312C17.9398 28.9319 18.0655 29.399 18.3168 29.7324C18.5707 30.0633 18.9223 30.2287 19.3717 30.2287C19.8642 30.2287 20.2145 30.1168 20.4227 29.8928V28.8046H19.2803V28.0715H21.3823V30.202Z" fill="#052E5C"></path><path d="M26.8659 28.2892C26.8659 28.8339 26.772 29.3124 26.5841 29.7248C26.3963 30.1346 26.1272 30.4502 25.7768 30.6716C25.429 30.8905 25.0279 31 24.5735 31C24.1241 31 23.723 30.8905 23.3701 30.6716C23.0198 30.4502 22.7481 30.1358 22.5552 29.7286C22.3648 29.3213 22.2683 28.8517 22.2658 28.3197V28.0066C22.2658 27.4645 22.361 26.9859 22.5514 26.571C22.7443 26.1561 23.0147 25.8392 23.3625 25.6203C23.7129 25.3989 24.114 25.2882 24.5659 25.2882C25.0178 25.2882 25.4176 25.3976 25.7654 25.6165C26.1157 25.8329 26.3861 26.146 26.5765 26.5558C26.7669 26.963 26.8634 27.4377 26.8659 27.9799V28.2892ZM25.9025 27.999C25.9025 27.383 25.7857 26.9108 25.5522 26.5825C25.3211 26.2541 24.9924 26.09 24.5659 26.09C24.1495 26.09 23.8233 26.2541 23.5872 26.5825C23.3536 26.9083 23.2343 27.3703 23.2292 27.9685V28.2892C23.2292 28.9001 23.3473 29.3722 23.5834 29.7057C23.822 30.0391 24.1521 30.2058 24.5735 30.2058C25 30.2058 25.3275 30.0429 25.556 29.7171C25.787 29.3913 25.9025 28.9153 25.9025 28.2892V27.999ZM24.8477 23.8755H25.9025L24.8477 25.0324H24.1051L24.8477 23.8755Z" fill="#052E5C"></path><path d="M28.789 28.8581V30.9236H27.8256V25.3645H29.9467C30.5661 25.3645 31.0574 25.5262 31.4204 25.8494C31.786 26.1727 31.9688 26.6003 31.9688 27.1323C31.9688 27.677 31.7898 28.1008 31.4318 28.4037C31.0764 28.7066 30.5775 28.8581 29.9352 28.8581H28.789ZM28.789 28.083H29.9467C30.2894 28.083 30.5509 28.0028 30.7311 27.8425C30.9114 27.6796 31.0015 27.4454 31.0015 27.1399C31.0015 26.8396 30.9101 26.6003 30.7273 26.4221C30.5445 26.2414 30.2932 26.1485 29.9733 26.1434H28.789V28.083Z" fill="#052E5C"></path></svg></span></a></li></ul></div><!-- Close widget --></div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
