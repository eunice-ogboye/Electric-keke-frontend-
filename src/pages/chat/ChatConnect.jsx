import { useTitle } from "../../lib/hooks";
import Spear from "../../assets/svg/Spear";
import Call from "../../assets/svg/Call";
import ConnectChatBoard from '../../components/chat/ConnectChatBoard'

const ChatConnect = () => {
  useTitle('Connect')
  return (
    <section className="pb-28">
      <header className="h-[119px] bg-gradient-to-r from-[#4B974B] to-[#234623] flex-center home-pad">

        <div className="w-full flex items-center justify-between">

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <Spear color="white" />
              <div className="size-16 rounded-full border-base-white border-4 text-white flex-center font-bold">
                Susu
              </div>
            </div>

            <h2 className="text-white font-bold">Susan Michael</h2>
          </div>

          <div>
            <Call type="connect" />
          </div>
        </div>
      </header>

      <div className="home-pad mt-10">
        <h3 className="text-2xl font-bold font-josefin">
          Send a message...
        </h3>

        <ConnectChatBoard />
      </div>
    </section>
  );
};

export default ChatConnect;
