import Link from "next/link";
import ProfileSearch from "../svg/ProfileSearch";
import VaccineProtectionMedicinePill from "../svg/VaccineProtectionMedicinePill";
import ChatDots from "../svg/ChatDots";
import CollectionRecords from "../svg/CollectionRecords";

const profileRoutes = [
  {
    id: 1,
    name: "Личный Кабинет",
    path: "/profileUserFromStore/personal_account",
    icon: <ProfileSearch />,
  },
  {
    id: 2,
    name: "Упоминание",
    path: "/profileUserFromStore/reminders",
    icon: <VaccineProtectionMedicinePill />,
  },
  {
    id: 3,
    name: "Сообщение Доктору",
    path: "/profileUserFromStore/message_doctor",
    icon: <ChatDots />,
  },
  {
    id: 4,
    name: "Медицинская форма",
    path: "/profileUserFromStore/medical_questionnaire",
    icon: <CollectionRecords />,
  },
];

function ProfileNavigation() {
  return (
    <nav className="w-full my-10">
      {profileRoutes.map((el) => (
        <div
          className="px-5 h-16 w-full  hover:rounded-lg hover:bg-[#C8BCF6] group flex items-center justify-start gap-10 transition-all duration-200"
          key={el.id}
        >
          <span>{el.icon}</span>
          <Link href={el.path} className="group-hover:text-white ">
            {el.name}
          </Link>
        </div>
      ))}
    </nav>
  );
}

export default ProfileNavigation;
