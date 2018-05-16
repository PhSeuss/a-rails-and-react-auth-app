# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Monster.destroy_all

thuong = User.create!(username: 'thuong',email: 'thuong@thuong.com', password: '123456', name: 'thuong')
suong = User.create!(username: 'suong',email: 'suong@suong.com', password: '123456', name: 'thuong')
phuong = User.create!(username: 'phuong',email: 'phuongphuong.com', password: '123456', name: 'thuong')
User.create!(username: 'huong',email: 'huong@huong.com', password: '123456', name: 'thuong')
User.create!(username: 'khuong',email: 'khuong@khuong.com', password: '123456', name: 'thuong')

Monster.create!(user: thuong, name: "JAVA", description: "Used for app development" )
Monster.create!(user: thuong, name: "PYTHON", description: "Used for app development" )
Monster.create!(user: thuong, name: "C++", description: "Used for app development" )
Monster.create!(user: thuong, name: "C#", description: "Used for app development" )
Monster.create!(user: thuong, name: "C", description: "Used for app development" )


Monster.create!(user: phuong, name: "JAVASCIPT", description: "Used for web development" )
Monster.create!(user: phuong, name: "RUBY", description: "Used for web development" )
Monster.create!(user: phuong, name: "HTML", description: "Used for web development" )
Monster.create!(user: phuong, name: "CSS", description: "Used for web development" )

Monster.create!(user: suong, name: "C", description: "Used for firmware development" )
Monster.create!(user: suong, name: "ASSEMBLY", description: "Used for firmware development" )
Monster.create!(user: suong, name: "C#", description: "Used for firmware development" )
Monster.create!(user: suong, name: "JAVA", description: "Used for firmware development" )

