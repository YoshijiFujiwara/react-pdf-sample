import { View, Text, Image } from "@react-pdf/renderer";
import styles from "../../styles";
import { ProfileType } from "../../types/profile";

export const Profile = ({ profile }: { profile: ProfileType }) => {
  return (
    <View style={styles.profile_container}>
      <Image style={styles.profile_img} src={profile.profileImageURL} />

      <View
        style={{
          justifyContent: "center",
        }}
      >
        <Text style={styles.name_text}>{profile.name}</Text>
      </View>
      <Text style={styles.profession_text}>{profile.profession}</Text>
      <View style={styles.profile_line} />
    </View>
  );
};

export const LeftSection = ({ profile }: { profile: ProfileType }) => {
  return (
    <View style={styles.section_left}>
      <Profile profile={profile} />
    </View>
  );
};
