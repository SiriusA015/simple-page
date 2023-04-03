import { useRouter } from "next/router";
import Image from "next/image";

function Header() {
  const router = useRouter();
  const onConnect = () => {
    router.push("/auth/login");
  };

  return (
    <>
      <div className="2xl:h-[120px] h-[90px] flex justify-between items-center 2xl:px-[172px] xl:px-[140px] lg:px-[100px] md:px-[60px] px-[30px] relative">
        <div className="relative 2xl:mt-[10px] xl:mt-[6px] mt-[3px]">
          <Image
            alt="avatar"
            src="/static/images/user/user1.png"
            className="2xl:w-[55px] w-[40px] 2xl:h-[55px] h-[40px]"
            width={55}
            height={55}
          />
          <Image
            alt="setting"
            src="/static/images/icons/setting.png"
            className="absolute bottom-0 lg:left-[-25px] md:left-[-15px] left-[-10px] cursor-pointer 2xl:w-[20px] w-[15px] 2xl:h-[20px] h-[15px]"
            width={20}
            height={20}
          />
        </div>
        <div className="absolute 2xl:w-[96px] w-[70px] 2xl:h-[96px] h-[70px] mx-auto left-0 right-0">
          <Image
            alt="earth"
            src="/static/images/icons/earth.png"
            className="cursor-pointer 2xl:w-[96px] w-[70px] 2xl:h-[96px] h-[70px]"
            width={96}
            height={96}
            onClick={() => {
              router.push("/");
            }}
          />
        </div>
        <div
          className="mt-[10px] flex justify-center items-center bg-formback border-[1px] border-borderwhite rounded-[20px] 2xl:w-[170px] w-[120px] 2xl:h-[60px] h-[40px] font-[600] 2xl:text-[16px] text-[12px] text-textwhite cursor-pointer"
          onClick={onConnect}
        >
          CONNECT WALLET
        </div>
        <div className="absolute w-screen left-0 bottom-0 border-[1px] border-[#CCCCCC]"></div>
      </div>
    </>
  );
}
export default Header;
