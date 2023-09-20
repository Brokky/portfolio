import CustomIcon from "../../../../CustomIcon";

const SkillIcon = ({ icon, name }) => (
  <div className="flex flex-col justify-center items-center hover:bg-green-100 rounded transition w-1/3">
    <CustomIcon
      icon={icon}
      size="5x"
      className="py-2"
      alt={`${name} icon`}
    />
    <span className="text-center text-green-700 font-bold italic tracking-wider hover:text-green-900 transition">
      {name}
    </span>
  </div>
);

export default SkillIcon;
