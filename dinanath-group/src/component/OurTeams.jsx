import React from "react";
import Header from "./Header";
import Vc from "../assets/vc.jpg";
import chairman from "../assets/Yogesh.jpg";
import Chairperson from "../assets/ArchnaSachan.jpg";
const OurTeams = () => {
  return (
    <>
      <Header
        title={"OUR TEAMS"}
        img={
          "https://png.pngtree.com/thumb_back/fh260/back_our/20190622/ourmid/pngtree-climbing-the-peak-of-the-team-s-success-image_214836.jpg"
        }
      />

      <div className="grid grid-cols-1 border-gray-100 border m-3  md:grid-cols-2 overflow-hidden md:h-[80vh] mt-10 p-3 ">
        <div className="flex flex-col sm:px-0 md:px-4 sm:py-5 md:p-16 lg:pr-10 lg:pl-20 lg:py-10 gap-3">
          <h2 className=" text-3xl font-bold leading-relaxed lg:text-start sm:text-start text-[#a12a12] ">
            Chairman’s Message
          </h2>

          <p className="text-gray-600 mb-6 text-[15px] text-justify">
            Education is not merely for earning a living—it is the foundation of
            a meaningful life. While skills open career doors, values shape
            character and purpose. At Dayanand Dinanath Group of Institutions,
            we instill integrity, resilience, and compassion at every academic
            stage, ensuring students grow as capable professionals and
            principled individuals.
          </p>
          <p className="text-gray-600 mb-6 text-[15px] text-justify">
            Our holistic approach blends academic rigor with moral development,
            fostering critical thinking and social responsibility. With
            dedicated faculty and modern resources, we empower students to excel
            beyond classrooms, becoming leaders who contribute positively to
            society.
          </p>
          <p className="text-gray-600 mb-6 text-[15px] text-justify">
            We take pride in nurturing future-ready minds, where education
            transcends textbooks to inspire lifelong learning and ethical
            living. Together, let us build a generation that thrives on
            knowledge, wisdom, and humanity.
          </p>
        </div>
        <div className=" w-full  flex-col flex justify-center items-center md:h-auto">
          <img
            src={chairman}
            className=" sm:size-[100%]   mb-2.5 md:size-[70%]"
          />
          <h5 className="text-gray-900 text-[15px] font-bold font-manrope leading-normal sm:text-start lg:text-start  mb-4">
            SHRI YOGESH KR SACHAN
          </h5>
          <h4 className="text-gray-900 text-1xl font-bold font-manrope leading-normal lg:text-start md:text-center sm:text-start mb-5">
            (Chairman)
          </h4>
        </div>
      </div>

      <div className="grid grid-cols-1 border-gray-100 p-3 border m-3  md:grid-cols-2 overflow-hidden md:h-[80vh]">
       
        <div className=" w-full  flex-col flex justify-center items-center md:h-auto">
          <img src={Vc} className=" sm:size-[100%]   mb-2.5 md:size-[70%]" />
          <h5 className="text-gray-900 text-[15px] font-bold font-manrope leading-normal sm:text-start lg:text-start  mb-4">
            DR. SAURABH KR SACHAN
          </h5>
          <h4 className="text-gray-900 text-1xl font-bold font-manrope leading-normal lg:text-start md:text-center sm:text-start mb-5">
            (Vice –Chairman)
          </h4>
        </div> <div className="flex flex-col sm:px-0 md:px-4 sm:py-5   md:p-16 lg:pl-5 lg:pr-20 lg:py-5 gap-3">
          <h2 className=" text-3xl font-bold leading-relaxed lg:text-start sm:text-start text-[#a12a12] ">
            Vice Chairperson's Message
          </h2>

          <p className="text-gray-600 mb-6 text-[15px] text-justify">
            Education is a crucial ingredient for a person’s professional
            development. It is the development of skills, knowledge, mind and
            character of an individual. At the same time the increased
            complexity and variability of our occupational life has resulted in
            the need to train a vast number of people for skilled operations
            whether in the field of technology, pedagogy, management or
            pharmacy, At Dayanand Dinanath Group of Institutions we tend to do
            so with the help of professionally trained staff and
            state-of-the-art facilities. Our Institutions are recognized by the
            AICTE, PCI, Ministry of Human Research development (Government of
            India), and also by the NCTE (National Council of Teacher
            Education), New Delhi.
          </p>
          <p className="text-gray-600 mb-6 text-justify ">
            It is affiliated to AKTU (Dr, APJ Abdul Kalam Technical University),
            Lucknow for its B.Pharm, M.Pharm & MBA programmes, and to the CSJM
            University for its B.Ed programme. D.Pharm programme is affiliated
            to BTE Lucknow. Our DDEC English medium Schools are Affiliated by
            Central Board of Secondary Education & Indian Certificate of
            Secondary Education.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 border-gray-100 p-3 border m-3  md:grid-cols-2 overflow-hidden md:h-[80vh] mb-20">
        <div className="flex flex-col sm:px-0 md:px-4 sm:py-5 md:p-16 lg:pr-10 lg:pl-20 lg:py-10 gap-3">
          <h2 className=" text-3xl font-bold leading-relaxed lg:text-start sm:text-start text-[#a12a12] ">
            Chairperson's Message
          </h2>

          <p className="text-gray-600 mb-6 text-[15px] text-justify ">
            In order to succeed, we must first believe that we can. Education is
            the basis of all progress. Its purpose is to inculcate humanitarian
            values, wisdom, compassion, courage and reliability in students.
            Academic excellence along with active participation in co-curricular
            activities complete the process of education and it gives me immense
            pleasure that the school is progressing in all its endeavours
            towards the overall development of the students.
          </p>
          <p className="text-gray-600 mb-6 text-[15px] text-justify ">
            The seeds of an idea sown in 2002 have quickly grown into strong
            saplings. The school has marched forward to spread the light of
            education and pave the path of excellence for every student. It is
            heartening to see the achievements of the students and the school’s
            progress throughout the year. I hope the school graduates will
            become leaders of their chosen fields and contribute positively
            towards the progress of our nation and of humanity at large
          </p>
        </div>
        <div className=" w-full  flex-col flex justify-center items-center md:h-auto">
          <img
            src={Chairperson}
            className=" sm:size-[100%]   mb-2.5 md:size-[70%]"
          />
          <h5 className="text-gray-900 text-[15px] font-bold font-manrope leading-normal sm:text-start lg:text-start  mb-4">
            MRS. ARCHANA SACHAN
          </h5>
          <h4 className="text-gray-900 text-1xl font-bold font-manrope leading-normal lg:text-start md:text-center sm:text-start mb-5">
            (Chairperson)
          </h4>
        </div>
      </div>
    </>
  );
};

export default OurTeams;
