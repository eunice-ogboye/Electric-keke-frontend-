import useTitle from "../hooks/useTitle";
import Spear from "../assets/svg/Spear";
import ConnectChatBoard from "../features/contact/components/ConnectChatBoard";
import Btn from "@/components/btn/Btn";
import { useModal } from "@/hooks/useModal";
import { useMedia } from "@/hooks/useMedia";
import ContactModal from "@/features/tracking/components/ContactModal";

const ChatConnect = () => {
  useTitle("Connect");
  const mediaSmall = useMedia("(max-width: 500px)");
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <section className="pb-28">
      <header className="md:h-[119px] pt-3 pb-[10px] md:pt-0 md:mb-0 bg-gradient-to-r from-[#4B974B] to-[#234623] flex-center home-pad">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <Btn
                icon={<Spear color="white" />}
                styling="bg-transparent"
                onClick={() => history.back()}
              />

              <div className="size-9 md:size-16 rounded-full flex-center ">
                <img
                  src="/persons/profile.jpeg"
                  alt="person"
                  className="size-full object-cover object-center rounded-full"
                />
              </div>
            </div>

            <h2 className="text-white text-base font-bold">Susan Michael</h2>
          </div>

          <ContactModal
            isModalOpen={isModalOpen}
            openModal={openModal}
            closeModal={closeModal}
            smallMedia={mediaSmall}
            connect
          />
          {/* <div>
            <Call type="connect" />
          </div> */}
        </div>
      </header>

      <div className="home-pad mt-[6.2vh] md:mt-10 h-[78vh] md:h-auto">
        <h3 className="text-eiteen md:text-2xl font-bold font-josefin">
          Send a message...
        </h3>

        <ConnectChatBoard />
      </div>
    </section>
  );
};

export default ChatConnect;
