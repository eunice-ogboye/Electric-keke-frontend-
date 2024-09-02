import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "../components/ui/input-otp";

const OtpInput = ({ value, handleChange }) => {
  return (
    <InputOTP
      maxLength={5}
      value={value}
      className="border-4 border-orange-800"
      onChange={handleChange}
    >
      <InputOTPGroup className="justify-between w-[396px]">
        <InputOTPSlot
          index={0}
          className="border-2 rounded-sm size-14 border-black"
        />
        <InputOTPSlot
          index={1}
          className="border-2 rounded-sm size-14 border-black"
        />
        <InputOTPSlot
          index={2}
          className="border-2 rounded-sm size-14 border-black"
        />
        <InputOTPSlot
          index={3}
          className="border-2 rounded-sm size-14 border-black"
        />
        <InputOTPSlot
          index={4}
          className="border-2 rounded-sm size-14 border-black"
        />
      </InputOTPGroup>
    </InputOTP>
  );
};

export default OtpInput;
