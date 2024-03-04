import {
  ApertureIcon,
  CopyIcon,
  LayoutDashboardIcon,
  LoginIcon,
  MoodHappyIcon,
  TypographyIcon,
  UserPlusIcon,
  AlienIcon,
  RulerMeasureIcon,
  UsbIcon,
  OlympicsIcon,
  ApiAppIcon,
  BuildingIcon,
  MeteorIcon,
  XboxAIcon,
  BinaryIcon,
  UserXIcon,
  PodiumIcon,
  AB2Icon,
  KarateIcon,
  NotesIcon,
  NotesOffIcon,
  NotebookIcon
} from "vue-tabler-icons";

export interface menu {
  header?: string;
  title?: string;
  icon?: any;
  to?: string;
  chip?: string;
  chipColor?: string;
  chipVariant?: string;
  chipIcon?: string;
  children?: menu[];
  disabled?: boolean;
  type?: string;
  subCaption?: string;
}

const sidebarItem: menu[] = [
  { header: "Home" },
  {
    title: "Dashboard",
    icon: LayoutDashboardIcon,
    to: "/"
  },
  { header: "CFDI" },
  {
    title: "CFDI Certificados",
    icon: NotebookIcon,
    to: "/cfdi-certificates"
  },
  { header: "Accounts" },
  {
    title: "Cuentas",
    icon: AlienIcon,
    to: "/account"
  },

  { header: "Signatures" },
  {
    title: "Firma de usuario",
    icon: AB2Icon,
    to: "/signatures",
    chipColor: "secondary",
    disabled: false
  },
  { header: "authorization" },
  {
    title: "Permisos",
    icon: UsbIcon,
    to: "/permissions",
    chipColor: "secondary",
    disabled: false
  },
  {
    title: "Politicas",
    icon: OlympicsIcon,
    to: "/policies",
    chipColor: "secondary",
    disabled: false
  },
  {
    title: "Roles",
    icon: ApiAppIcon,
    to: "/roles",
    chipColor: "secondary",
    disabled: false
  },
  { header: "Organizacional" },
  {
    title: "Empresas",
    icon: BuildingIcon,
    to: "/enterprises"
  },
  {
    title: "Empleados",
    icon: UserXIcon,
    to: "/employees"
  },
  {
    title: "Nombres comerciales",
    icon: MeteorIcon,
    to: "/bussinessNames"
  },
  {
    title: "Sucursales",
    icon: XboxAIcon,
    to: "/branches"
  },
  { header: "clientes" },
  {
    title: "Clientes",
    icon: BinaryIcon,
    to: "/clientes"
  },
  { header: "Configuración" },
  {
    title: "Api Scopes",
    icon: RulerMeasureIcon,
    to: "/scopes",
    chipColor: "secondary",
    disabled: false
  },
  {
    title: "Api Resource",
    icon: PodiumIcon,
    to: "/apiResources",
    chipColor: "secondary",
    disabled: false
  },
  { header: "Identity" },
  {
    title: "Roles de Seguridad",
    icon: KarateIcon,
    to: "/security-roles"
  }
  // { header: "utilities" },
  // {
  //   title: "Typography",
  //   icon: TypographyIcon,
  //   to: "/ui/typography"
  // },
  // {
  //   title: "Shadow",
  //   icon: CopyIcon,
  //   to: "/ui/shadow"
  // },
  // { header: "auth" },
  // {
  //   title: "Login",
  //   icon: LoginIcon,
  //   to: "/auth/login"
  // },
  // {
  //   title: "Register",
  //   icon: UserPlusIcon,
  //   to: "/auth/register"
  // }
  // { header: "Extra" },
  // {
  //   title: "Icons",
  //   icon: MoodHappyIcon,
  //   to: "/icons"
  // },
  // {
  //   title: "Sample Page",
  //   icon: ApertureIcon,
  //   to: "/sample-page"
  // }
];

export default sidebarItem;
