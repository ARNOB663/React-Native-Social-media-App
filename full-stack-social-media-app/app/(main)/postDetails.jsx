import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { createComment, fetchPostsDetails } from "../../services/postService";
import { hp, wp } from "../../helpers/common";
import { theme } from "../../constants/theme";
import { useRoute } from "@react-navigation/native";
import { useAuth } from "../../context/AuthContext"; // adjust path accordingly
import Input from '../../components/Input'

 // Adjust the path based on your project structure
import Loading from "../../components/Loading";
import PostCard from '../../components/PostCard';
import { useRef } from "react";
import Comment from '../../assets/icons/Comment';
import Icon from "../../assets/icons";

const PostDetails = () => {
  const { postId } = useLocalSearchParams();
  const {user} = useAuth();
  const router = useRoute();
  const [startLoading,setStartLoading]  = useState(true)
  const inputRef = useRef(null)
  const commentRef = useRef('') 
  const [loading,setLoading] = useState(false)

  const [post,setPost] = useState(null);

 useEffect(()=>{
    getPostDetails();
 },[]);


 const getPostDetails = async ()=>{
  //fetch post details here
  let res = await fetchPostsDetails(postId);
if(res.success) setPost(res.data);
 setStartLoading(false)
  
 }

 const onNewComment =  async () =>{

   if(!commentRef.current) return null;
   let data = {
    userId:user?.id,
    postId:post?.id,
    text: commentRef.current
   }
   //create comment
   setLoading(true);
   let res = await createComment(data);
   setLoading(false);
   if(res.success){
   //send notification later 

    inputRef?.current?.clear();
    commentRef.current = ""

   }else{
    Alert.alert("comment",registerCallableModule.msg)
   }

 }

 if(startLoading){
  return (

    <View style={styles.center}>
      <Loading></Loading>
    </View>

  )
 }

  return (
    <View style={styles.container} > 
     <ScrollView  showsVerticalScrollIndicator={false}  contentContainerStyle={styles.list} >
     <PostCard 
  item={post}
  currentUser={user}
  router={router} // Pass the router object here
  hasShadow={false}
  showMoreIcon={false}
/>
  {/* comment input  */}
  <View style={styles.inputContainer}>
      
    <Input
      inputRef={inputRef}
      onChangeText={value=> commentRef.current = value  }
     placeholder="Type common..."
    placeholderTextColor={theme.colors.textLight}
    containerStyle={{flex:1,height:hp(6.2),borderRadius: theme.radius.xl}}
    ></Input>
    {
      loading? (
        <View style={styles.loading}> 
        <Loading size="small" ></Loading>
         </View>

      ):(
          
        <TouchableOpacity style={styles.sendIcon} onPress={onNewComment} >
     {/* <Icon name='send' color={theme.colors.primaryDark}></Icon> */}

     <Icon name='send' color={theme.colors.primaryDark} ></Icon>
    </TouchableOpacity>

      )
    }

    
  </View>
     </ScrollView>
    </View>
  );
};

export default PostDetails;

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor: 'white',
    paddingVertical: wp(7),
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  list:{
     paddingHorizontal: wp(4),
  },
  sendIcon:{
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.8,
    borderColor: theme.colors.primary,
    borderRadius: theme.radius.lg,
    borderCurve: 'continuous',
    height: hp(5.8),
    width: hp(5.8)
  },
  center: {
    flex:1 ,
    alignItems: 'center',
    justifyContent: 'center'
  },
  notFound:{
    fontSize: hp(2.5),
    color: theme.colors.text,
    fontWeight: theme.fonts.medium,
  },
  loading:{
     height: hp(5.8),
     width: hp(5.8),
     justifyContent : 'center',
     alignItems: 'center',
     transform: [{scale: 1.3}]
  }
});
