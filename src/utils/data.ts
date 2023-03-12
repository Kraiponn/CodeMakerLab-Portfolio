import { IPersonalData, IProject } from "@/interfaces";

/****************************************************************************************
 *  Personal Experience Data - English Version
 */
export const jobsExperience: IPersonalData[] = [
  {
    id: "1",
    years: `Jul 2010 - Oct 2013`,
    position: `Software Engineer`,
    company: `Software Engineer at Nidec Copal Company(Thailand).`,
    responsibility:
      "Design and develop tools and sofeware for support the production line such as design electronics circuit, controller board, data analysis and research the innovation(Tools) for safe cost of the company.",
  },
  {
    id: "2",
    years: `Dec 2013 – Oct 2014`,
    position: `Programmer`,
    company: `Programmer at Fabrinet Company Thailand.`,
    responsibility:
      "Develop and analysis software on web and windows platform. like account system, attendance system, product stock etc.",
  },
  {
    id: "3",
    years: `Oct 2014 – 4 Jul 2016`,
    position: `Software Engineer`,
    company: `Software Engineer at Magnecomp precision technology.`,
    responsibility:
      "Develop software and research new technology for improvement product of the company like image processing program, robot controller software etc.",
  },
  {
    id: "4",
    years: `Jul 2016 to Aug 2017`,
    position: `Full Stack Developer`,
    company: `Full stack developer at JY innovation company.`,
    responsibility:
      "Develop software on web and mobile application using technologies like nodejs(NestJS), php(Laravel), c#(ASP.Net Core), react(NextJS), git, docker and etc",
  },
  {
    id: "5",
    years: `Aug 2017 to Now`,
    position: `Freelance Full Stack Developer`,
    company: `Freelancer`,
    responsibility:
      "Develop software on web application using technologies like nodejs(NestJS), php(Laravel), c#(ASP.Net Core), react(NextJS), git, docker and etc",
  },
];

/****************************************************************************************
 *  Personal Experience Data - Thai Version
 */
export const jobsExperienceTh: IPersonalData[] = [
  {
    id: "1",
    years: `Jul 2010 - Oct 2013`,
    position: `วิศวกรรมซอฟต์แวร์`,
    company: `ตำแหน่งวิศวกรรมซอฟต์แวร์ ที่บริษัทนิเด็คโคปาลประเทศไทย`,
    responsibility:
      "ออกแบบเครื่องมือและพัฒนาแอพพลิเคชั่นเพื่อคอยให้การสนับสนุนฝ่ายผลิตสินค้า เช่น ออกแบบวงจรไฟฟ้า ชุดควบคุมระบบควบคุมอัตโนมัติ คิดค้นเครื่องมือสำหรับแก้ไขปัญหาที่เกิดจากการผลิตชิ้นงาน รวมไปถึงค้นคว้านวัตกรรมที่ช่วยลดเวลาในการผลิตสินค้าและลดต้นทุนในการผลิตสินค้า",
  },
  {
    id: "2",
    years: `ตุลาคม 2556 – ตุลาคม 2557`,
    position: `โปรแกรมเมอร์`,
    company: `ตำแหน่งโปรแกรมเมอร์ ที่บริษัทฟราบลิเนทประเทศไทย`,
    responsibility:
      "พัฒนา web application และ windows application ตามคำร้องขอของลูกค้า รวมไปถึงพัฒนาแอพพลิเคชั่นเพื่อช่วยลดต้นทุนให้กับบริษัท",
  },
  {
    id: "3",
    years: `ตุลาคม 2557 – กรกฎาคม 2559`,
    position: `วิศวกรรมซอฟต์แวร์`,
    company: `ตำแหน่งวิศวกรรมซอฟต์แวร์ ที่บริษัทแมคนิคอมพลีซีชั่นประเทศไทย`,
    responsibility:
      "พัฒนาแอพพลิเคชั่นตามคำร้องขอของลูกค้าแต่งานหลักส่วนใหญ่เป็นเป็นการพฒนาแอพพลิเคชั่นทางด้าน Image processing ซะส่วนใหญ่",
  },
  {
    id: "4",
    years: `กรกฎาคม 2559 - สิงหาคม 2560`,
    position: `นักพัฒนาแอพพลิเคชั่น`,
    company: `ตำแหน่งนักพัฒนาแอพพลิเคชั่น ที่บริษัทเจวายอินโนเวชั่นประเทศไทย`,
    responsibility:
      "พัฒนาแอพพลิเคชั่นตามคำร้องขอไม่ว่าจะเป็น web application และ mobile application",
  },
  {
    id: "5",
    years: `สิงหาคม 2560 ถึงปัจจุบัน`,
    position: `นักพัฒนาซอฟต์แวร์อิสระ`,
    company: `นักพัฒนาซอฟต์แวร์อิสระ สายงานเว็บไซต์`,
    responsibility:
      "รับพัฒนาเว็บแอพพลิเคชั่น ไม่ว่าจะเป็น Web api, web ui เครื่องมือที่ใช้ในการพัฒนาเช่น nodejs(NestJS), php(Laravel), c#(ASP.Net Core), react(NextJS), git, docker เป็นต้น",
  },
];

/****************************************************************************************
 *  The First Project Data  - English Version
 */
export const nidecProjects: IProject[] = [
  {
    id: "1",
    name: "Data Save System",
    url: "https://github.com/Kraiponn/AQD-3010-Datasave-System",
    picture:
      "https://res.cloudinary.com/kraiponn-dev/image/upload/v1678482897/P1180583_esrdiz.jpg",
  },
  {
    id: "2",
    name: "Auto Stamping",
    url: "https://github.com/Kraiponn/W-Auto-Stamping",
    picture:
      "https://res.cloudinary.com/kraiponn-dev/image/upload/v1678482995/DSCF4479_i362ay.jpg",
  },
  {
    id: "3",
    name: "Auto Heigth Check",
    url: "https://github.com/Kraiponn/W-Auto-Height-Check",
    picture:
      "https://res.cloudinary.com/kraiponn-dev/image/upload/v1678482965/HeightCheck_RUN_COMP1_hjfztr.jpg",
  },
  {
    id: "4",
    name: "Auto Function Check",
    url: "https://github.com/Kraiponn/W-Auto-Function-Check",
    picture:
      "https://res.cloudinary.com/kraiponn-dev/image/upload/v1678501439/apprunner_y2w5mj.jpg",
  },
];

/****************************************************************************************
 *  The First Project Data - Thai Version
 */
export const nidecProjectsTh: IProject[] = [
  {
    id: "1",
    name: "ระบบวิเคราะห์ข้อมูลการผลิต",
    url: "https://github.com/Kraiponn/AQD-3010-Datasave-System",
    picture:
      "https://res.cloudinary.com/kraiponn-dev/image/upload/v1678482897/P1180583_esrdiz.jpg",
  },
  {
    id: "2",
    name: "ระบบตรวจสอบประวัติขั้นตอนการผลิต",
    url: "https://github.com/Kraiponn/W-Auto-Stamping",
    picture:
      "https://res.cloudinary.com/kraiponn-dev/image/upload/v1678482995/DSCF4479_i362ay.jpg",
  },
  {
    id: "3",
    name: "ระบบตรวจสอบแรงกดชิ้นงาน",
    url: "https://github.com/Kraiponn/W-Auto-Height-Check",
    picture:
      "https://res.cloudinary.com/kraiponn-dev/image/upload/v1678482965/HeightCheck_RUN_COMP1_hjfztr.jpg",
  },
  {
    id: "4",
    name: "ระบบบันทึกข้อมูลชิ้นงาน",
    url: "https://github.com/Kraiponn/W-Auto-Function-Check",
    picture:
      "https://res.cloudinary.com/kraiponn-dev/image/upload/v1678501439/apprunner_y2w5mj.jpg",
  },
];

/****************************************************************************************
 *  Freelance , Prject Data - English Version
 */
export const freelanceProjects: IProject[] = [
  {
    id: "1",
    name: "Ecommerce Web Site",
    url: "https://github.com/Kraiponn/Elect-Shops",
    picture:
      "https://res.cloudinary.com/kraiponn-dev/image/upload/v1678483141/Screenshot_2022-12-12_130449_a9t8ak.png",
  },
  {
    id: "2",
    name: "Nurse Note",
    url: "https://github.com/Kraiponn/NursingSchedule",
    picture:
      "https://res.cloudinary.com/kraiponn-dev/image/upload/v1678483076/40513571_225304405006725_3862445539329048576_n_mlxuwp.png",
  },
  {
    id: "3",
    name: "Rest API with ASP.Net Core",
    url: "https://github.com/Kraiponn/DMNRestaurant-EFIdentity",
    picture:
      "https://res.cloudinary.com/kraiponn-dev/image/upload/v1678499677/dotnetcore-api_q2i8mj.jpg",
  },
  {
    id: "4",
    name: "Restaurant API with Laravel",
    url: "https://github.com/Kraiponn/LRV-Restaurant-API",
    picture:
      "https://res.cloudinary.com/kraiponn-dev/image/upload/v1678499677/laravel-ecommerce_gx4bub.jpg",
  },
  {
    id: "5",
    name: "Authentication & Authorization API",
    url: "https://github.com/Kraiponn/NS-CML-Stock",
    picture:
      "https://res.cloudinary.com/kraiponn-dev/image/upload/v1678499677/webapi-5_thitt4.webp",
  },
];

/****************************************************************************************
 *  Freelance , Prject Data - Thai Version
 */
export const freelanceProjectsTh: IProject[] = [
  {
    id: "1",
    name: "ร้านค้าออนไลน์",
    url: "https://github.com/Kraiponn/Elect-Shops",
    picture:
      "https://res.cloudinary.com/kraiponn-dev/image/upload/v1678483141/Screenshot_2022-12-12_130449_a9t8ak.png",
  },
  {
    id: "2",
    name: "บันทึกการทำงานพยาบาล",
    url: "https://github.com/Kraiponn/NursingSchedule",
    picture:
      "https://res.cloudinary.com/kraiponn-dev/image/upload/v1678483076/40513571_225304405006725_3862445539329048576_n_mlxuwp.png",
  },
  {
    id: "3",
    name: "Rest API ด้วย ASP.Net Core",
    url: "https://github.com/Kraiponn/DMNRestaurant-EFIdentity",
    picture:
      "https://res.cloudinary.com/kraiponn-dev/image/upload/v1678499677/dotnetcore-api_q2i8mj.jpg",
  },
  {
    id: "4",
    name: "ระบบให้บริการ(API) ร้านอาหาร",
    url: "https://github.com/Kraiponn/LRV-Restaurant-API",
    picture:
      "https://res.cloudinary.com/kraiponn-dev/image/upload/v1678499677/laravel-ecommerce_gx4bub.jpg",
  },
  {
    id: "5",
    name: "ระบบลงทะเบียนและจัดการสิทธิ(API)",
    url: "https://github.com/Kraiponn/NS-CML-Stock",
    picture:
      "https://res.cloudinary.com/kraiponn-dev/image/upload/v1678499677/webapi-5_thitt4.webp",
  },
];

/****************************************************************************************
 *  Portfolio Projects - English Version
 */
export const portfolioProjects: IProject[] = [
  {
    id: "1",
    name: "Ecommerce Web Site",
    url: "https://github.com/Kraiponn/Elect-Shops",
    picture:
      "https://res.cloudinary.com/kraiponn-dev/image/upload/v1678483141/Screenshot_2022-12-12_130449_a9t8ak.png",
  },
  {
    id: "2",
    name: "Nurse Note",
    url: "https://github.com/Kraiponn/NursingSchedule",
    picture:
      "https://res.cloudinary.com/kraiponn-dev/image/upload/v1678483076/40513571_225304405006725_3862445539329048576_n_mlxuwp.png",
  },
  {
    id: "3",
    name: "Restaurant API",
    url: "https://github.com/Kraiponn/DMNRestaurant-EFIdentity",
    picture:
      "https://res.cloudinary.com/kraiponn-dev/image/upload/v1678499677/dotnetcore-api_q2i8mj.jpg",
  },
  {
    id: "4",
    name: "Restaurant API with Laravel",
    url: "https://github.com/Kraiponn/LRV-Restaurant-API",
    picture:
      "https://res.cloudinary.com/kraiponn-dev/image/upload/v1678499677/laravel-ecommerce_gx4bub.jpg",
  },
  {
    id: "5",
    name: "Authentication & Authorization API",
    url: "https://github.com/Kraiponn/NS-CML-Stock",
    picture:
      "https://res.cloudinary.com/kraiponn-dev/image/upload/v1678499677/webapi-5_thitt4.webp",
  },
  {
    id: "6",
    name: "Auto Stamping",
    url: "https://github.com/Kraiponn/W-Auto-Stamping",
    picture:
      "https://res.cloudinary.com/kraiponn-dev/image/upload/v1678482995/DSCF4479_i362ay.jpg",
  },
  {
    id: "7",
    name: "Data Save System",
    url: "https://github.com/Kraiponn/AQD-3010-Datasave-System",
    picture:
      "https://res.cloudinary.com/kraiponn-dev/image/upload/v1678482897/P1180583_esrdiz.jpg",
  },
  {
    id: "8",
    name: "Auto Heigth Check",
    url: "https://github.com/Kraiponn/W-Auto-Height-Check",
    picture:
      "https://res.cloudinary.com/kraiponn-dev/image/upload/v1678482965/HeightCheck_RUN_COMP1_hjfztr.jpg",
  },
];

/****************************************************************************************
 *  Portfolio Projects - Thai Version
 */
export const portfolioProjectsTh: IProject[] = [
  {
    id: "1",
    name: "ร้านค้าออนไลน์",
    url: "https://github.com/Kraiponn/Elect-Shops",
    picture:
      "https://res.cloudinary.com/kraiponn-dev/image/upload/v1678483141/Screenshot_2022-12-12_130449_a9t8ak.png",
  },
  {
    id: "2",
    name: "บันทึกการทำงานพยาบาล",
    url: "https://github.com/Kraiponn/NursingSchedule",
    picture:
      "https://res.cloudinary.com/kraiponn-dev/image/upload/v1678483076/40513571_225304405006725_3862445539329048576_n_mlxuwp.png",
  },
  {
    id: "3",
    name: "Rest API ด้วย ASP.Net Core",
    url: "https://github.com/Kraiponn/DMNRestaurant-EFIdentity",
    picture:
      "https://res.cloudinary.com/kraiponn-dev/image/upload/v1678499677/dotnetcore-api_q2i8mj.jpg",
  },
  {
    id: "4",
    name: "ระบบให้บริการ(API) ร้านอาหาร",
    url: "https://github.com/Kraiponn/LRV-Restaurant-API",
    picture:
      "https://res.cloudinary.com/kraiponn-dev/image/upload/v1678499677/laravel-ecommerce_gx4bub.jpg",
  },
  {
    id: "5",
    name: "ระบบลงทะเบียนและจัดการสิทธิ(API)",
    url: "https://github.com/Kraiponn/NS-CML-Stock",
    picture:
      "https://res.cloudinary.com/kraiponn-dev/image/upload/v1678499677/webapi-5_thitt4.webp",
  },
  {
    id: "6",
    name: "ระบบตรวจสอบประวัติขั้นตอนการผลิต",
    url: "https://github.com/Kraiponn/W-Auto-Stamping",
    picture:
      "https://res.cloudinary.com/kraiponn-dev/image/upload/v1678482995/DSCF4479_i362ay.jpg",
  },
  {
    id: "7",
    name: "ระบบวิเคราะห์ข้อมูลการผลิต",
    url: "https://github.com/Kraiponn/AQD-3010-Datasave-System",
    picture:
      "https://res.cloudinary.com/kraiponn-dev/image/upload/v1678482897/P1180583_esrdiz.jpg",
  },
  {
    id: "8",
    name: "ระบบตรวจสอบแรงกดชิ้นงาน",
    url: "https://github.com/Kraiponn/W-Auto-Height-Check",
    picture:
      "https://res.cloudinary.com/kraiponn-dev/image/upload/v1678482965/HeightCheck_RUN_COMP1_hjfztr.jpg",
  },
];
