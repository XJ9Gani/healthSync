import HealthAndSafetyOutlineRounded from "@/components/svg/HealthAndSafetyOutlineRounded";
import RegistrationMain from "@/components/registration/RegistrationMain";

function Registration() {
  return (
    <section className="h-screen pt-32 bg-gradient-to-l from-[rgba(83,116,148,0.5)] to-[rgba(101,145,185,0.5)]">
      <div className=" w-2/3 mx-auto rounded-lg shadow-[0_0_10px_1px_gray] bg-white">
        <p className="mx-auto flex justify-center">
          <HealthAndSafetyOutlineRounded />
        </p>
        <RegistrationMain />
      </div>
    </section>
  );
}

export default Registration;
