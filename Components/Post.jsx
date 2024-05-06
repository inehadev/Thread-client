import { Box, Flex , Avatar , Text , Image } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Action from './Action'
import { useRecoilValue} from 'recoil'
import userScreenAtom from '../atoms/userAtom'
import { formatDistanceToNow } from 'date-fns';
import axios from 'axios';

const Post = ({post , postedBy}) => {
    
    const currentUser = useRecoilValue(userScreenAtom);
    const [user , setuser]=useState(null);
   
    useEffect(() => {
		const getUser = async () => {
		
			try {
				console.log("nmste")
				const res = await axios.get(`http://localhost:5000/profile/${user._id}`+postedBy);
				const data = await res.data;
				console.log(data)
						  if (data.error) {
							  showToast("Error", data.error, "error");
							  return;
						  }
				setuser(data);
			} catch (error) {
			console.log(error);
				setuser(null);
			}

		};

		getUser();
	}, [postedBy]);
	console.log("user is" ,user)
	console.log("currentUser is" , currentUser)
	
  return (
    <>

			<Flex gap={3} mb={4} py={5}>
				<Flex flexDirection={"column"} alignItems={"center"}>
					<Avatar
						size='md'
						name={user?.username}
						src={currentUser?.profilepic}
						onClick={(e) => {
							e.preventDefault();
							navigate(`/${currentUser.username}`);
						}}
					/>
					<Box w='1px' h={"full"} bg='gray.light' my={2}></Box>
					<Box position={"relative"} w={"full"}>
						{post.replies.length === 0 && <Text textAlign={"center"}>🥱</Text>}
						{post.replies[0] && (
							<Avatar
								size='xs'
								name='John doe'
								src={post.replies[0].user.profilepic}
								position={"absolute"}
								top={"0px"}
								left='15px'
								padding={"2px"}
							/>
						)}

						{post.replies[1] && (
							<Avatar
								size='xs'
								name='John doe'
								src={post.replies[1].userProfilePic}
								position={"absolute"}
								bottom={"0px"}
								right='-5px'
								padding={"2px"}
							/>
						)}

						{post.replies[2] && (
							<Avatar
								size='xs'
								name='John doe'
								src={post.replies[2].userprofilepic}
								position={"absolute"}
								bottom={"0px"}
								left='4px'
								padding={"2px"}
							/>
						)}
					</Box>
				</Flex>
				<Flex flex={1} flexDirection={"column"} gap={2}>
					<Flex justifyContent={"space-between"} w={"full"}>
						<Flex w={"full"} alignItems={"center"}>
							<Text
								fontSize={"sm"}
								fontWeight={"bold"}
								onClick={(e) => {
									e.preventDefault();
									navigate(`/${user.username}`);
								}}
							>
								{user?.username}
							</Text>
							<Image src='/verified.png' w={4} h={4} ml={1} />
						</Flex>
						<Flex gap={4} alignItems={"center"}>
							<Text fontSize={"xs"} width={36} textAlign={"right"} color={"gray.light"}>
								{formatDistanceToNow(new Date(post.createdAt))} ago
							</Text>

							{/* {currentUser?._id === user._id && <DeleteIcon size={20} onClick={handleDeletePost} />} */}
						</Flex>
					</Flex>

					<Text fontSize={"sm"}>{post.text}</Text>
					{post.img && (
						<Box borderRadius={6} overflow={"hidden"} border={"1px solid"} borderColor={"gray.light"}>
							<Image src={post.img} w={"full"} />
						</Box>
					)}

					<Flex gap={3} my={1}>
						<Action post={post} />
					</Flex>
				</Flex>
			</Flex>
		
        </>
	)
}


export default Post;
