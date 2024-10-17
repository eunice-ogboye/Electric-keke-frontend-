import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

const OtpInput = ({ value, handleChange }) => {
  return (
    <InputOTP
      maxLength={5}
      value={value}
      onChange={handleChange}
      className="w-full"
    >
      <InputOTPGroup className="justify-between w-full">
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
