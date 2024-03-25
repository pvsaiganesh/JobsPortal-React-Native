import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { isValidImageUrl } from "../../../../utils";
import styles from "./nearbyjobcard.style";

const NearbyJobCard = ({ job, handleNavigate }) => {
  // console.log(job);
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{
            uri: isValidImageUrl(job.employer_logo)
              ? job.employer_logo
              : "https://res.cloudinary.com/pvsaiganesh/image/upload/v1711022579/jobs-logo-template_124285-original_zgvsbi.webp",
          }}
          resizeMode="contain"
          style={styles.logImage}
        />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {job.job_title}
        </Text>
        <Text style={styles.jobType}>{job.job_employment_type}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NearbyJobCard;
