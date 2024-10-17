import ArrDown from "@/assets/svg/ArrDown";

export const SmallInfo = ({
  admin,
  fullname,
  email,
  photoConStyle,
  photo,
  styling,
  nameBoxStyling,
  textColor,
  show_nick,
  show_arr,
}) => {
  return (
    <div className={styling || "small-info"}>
      <div className="flex items-center gap-2">
        <div className={`rounded-full ${photoConStyle || "size-9"}`}>
          <img
            src={photo || "/persons/rider1.png"}
            alt={fullname || null}
            className="size-full rounded-full"
          />
        </div>

        <div className={nameBoxStyling}>
          <p className={`font-bold text-sm line-clamp-1 ${textColor}`}>
            {fullname}
          </p>
          {show_nick && (
            <p className="text-sm">{admin ? "Admin" : `@${email || "susu"}`}</p>
          )}
        </div>
      </div>

      {show_arr && (
        <div>
          <ArrDown />
        </div>
      )}
    </div>
  );
};

export const HeroSmallInfo = (props) => {
  return (
    <SmallInfo
      {...props}
      styling="w-fit laptop:w-[144px] border-0 laptop:border-2 border-neutral p-1 rounded-[40px]"
      photoConStyle="size-6 md:size-10"
      textColor="text-white"
      nameBoxStyling="hidden laptop:block"
      show_arr={false}
      show_nick={false}
    />
  );
};
