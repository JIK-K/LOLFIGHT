"use client";
import React, { useEffect, useState } from "react";
import CutsomAlert from "../../../../common/components/alert/CustomAlert";
import { createGuild } from "@/src/api/guild.api";
import { GuildDTO } from "@/src/common/DTOs/guild/guild.dto";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const [guildImage, setGuildImage] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string>("");
  const [guild, setGuild] = useState<GuildDTO>({
    id: "",
    guildMaster: "",
    guildName: "",
    guildMembers: 1,
    guildDescription: "",
    guildTier: "",
    guildIcon: "",
    guildRecord: null,
  });

  const handleGuildNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGuild({ ...guild, guildName: e.target.value });
  };
  const handleGuildDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setGuild({ ...guild, guildDescription: e.target.value });
  };

  const handleImgUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setGuildImage(e.target.files[0]);

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleCreateGuild = () => {
    if (guild.guildName !== "") {
      if (guild.guildName.length < 2 || guild.guildName.length > 12) {
        CutsomAlert(
          "warning",
          "길드생성",
          "길드명은 2자 이상, 12자 이내로 작성해주세요."
        );
      } else if (guildImage === null) {
        CutsomAlert(
          "warning",
          "길드생성",
          "50x50 사이즈의 길드이미지를 등록해주세요."
        );
      } else {
        createGuild(guild, guildImage)
          .then((response) => {
            CutsomAlert("success", "길드생성", "길드생성이 완료되었습니다.");
            router.replace("/");
          })
          .catch((error) => {
            CutsomAlert(
              "warning",
              "길드생성",
              "동일한 길드명이 존재하거나, 길드에 속해있습니다."
            );
          });
      }
    } else {
      CutsomAlert("warning", "길드생성", "길드명을 입력해주세요.");
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedMemberName = sessionStorage.getItem("memberName");
      setGuild({ ...guild, guildMaster: storedMemberName! });
    }
  }, []);

  return (
    <div className="w-full h-full">
      <div className="w-full h-full mx-auto">
        <div className="flex mt-5 mb-5">
          <div className="w-800px mx-auto h-full flex flex-col border-2 p-10 bg-white">
            <div className="items-center pb-3">
              <p className="text-xl font-extrabold">길드 이미지</p>
              <div className="flex flex-col p-3 items-center border border-brandcolor gap-3">
                {guildImage === null ? (
                  <div>
                    <img src="http://via.placeholder.com/50x50" alt="" />
                  </div>
                ) : (
                  <div>
                    <img src={previewImage} alt="Guild Icon" width={50} />
                  </div>
                )}

                <input
                  className="w-300px bg-brandcolor rounded text-white font-extrabold text-xl h-34px"
                  type="file"
                  accept="image/*"
                  onChange={handleImgUpload}
                ></input>
              </div>
            </div>
            <div className="items-center pb-3">
              <p className="text-xl font-extrabold">길드 명</p>
              <div className="flex flex-col p-3 items-center border border-brandcolor gap-3">
                <input
                  className="w-1/2 h-12 rounded-md px-2 bg-gray-50 border border-black-200"
                  type="text"
                  placeholder="길드명 (최대 12글자)"
                  onChange={handleGuildNameChange}
                />
              </div>
            </div>
            <div className="items-center pb-3">
              <p className="text-xl font-extrabold">길드소개글</p>
              <div className="flex flex-col p-3 items-center border border-brandcolor gap-3">
                <textarea
                  className="w-1/2 max-h-32 rounded-md px-2 bg-gray-50 border border-black-200"
                  placeholder="길드 소개글을 입력해주세요 (최대 40글자)"
                  onChange={handleGuildDescriptionChange}
                />
              </div>
            </div>
            <button
              className="w-full bg-brandcolor rounded text-white font-extrabold text-xl h-30px"
              onClick={handleCreateGuild}
            >
              길드생성
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
