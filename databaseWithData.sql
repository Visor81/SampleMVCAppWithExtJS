USE [master]
GO
/****** Object:  Database [SampleDB]    Script Date: 10.06.2015 3:21:39 ******/
CREATE DATABASE [SampleDB]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'SampleDB', FILENAME = N'D:\Program Files\Microsoft SQL Server\MSSQL11.MSSQLSERVER\MSSQL\DATA\SampleDB.mdf' , SIZE = 5120KB , MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB )
 LOG ON 
( NAME = N'SampleDB_log', FILENAME = N'D:\Program Files\Microsoft SQL Server\MSSQL11.MSSQLSERVER\MSSQL\DATA\SampleDB_log.ldf' , SIZE = 2048KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
GO
ALTER DATABASE [SampleDB] SET COMPATIBILITY_LEVEL = 110
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [SampleDB].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [SampleDB] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [SampleDB] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [SampleDB] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [SampleDB] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [SampleDB] SET ARITHABORT OFF 
GO
ALTER DATABASE [SampleDB] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [SampleDB] SET AUTO_CREATE_STATISTICS ON 
GO
ALTER DATABASE [SampleDB] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [SampleDB] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [SampleDB] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [SampleDB] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [SampleDB] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [SampleDB] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [SampleDB] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [SampleDB] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [SampleDB] SET  DISABLE_BROKER 
GO
ALTER DATABASE [SampleDB] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [SampleDB] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [SampleDB] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [SampleDB] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [SampleDB] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [SampleDB] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [SampleDB] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [SampleDB] SET RECOVERY FULL 
GO
ALTER DATABASE [SampleDB] SET  MULTI_USER 
GO
ALTER DATABASE [SampleDB] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [SampleDB] SET DB_CHAINING OFF 
GO
ALTER DATABASE [SampleDB] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [SampleDB] SET TARGET_RECOVERY_TIME = 0 SECONDS 
GO
EXEC sys.sp_db_vardecimal_storage_format N'SampleDB', N'ON'
GO
USE [SampleDB]
GO
/****** Object:  Table [dbo].[Contacts]    Script Date: 10.06.2015 3:21:39 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Contacts](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](50) NOT NULL,
	[email] [varchar](50) NULL,
	[phone] [varchar](20) NULL,
 CONSTRAINT [PK_Contacts] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Contribution]    Script Date: 10.06.2015 3:21:39 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Contribution](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[contact_id] [int] NOT NULL,
	[amount] [float] NOT NULL,
	[description] [nchar](100) NULL,
 CONSTRAINT [PK_Contribution] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Goods]    Script Date: 10.06.2015 3:21:39 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Goods](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[contact_id] [int] NOT NULL,
	[title] [nvarchar](50) NOT NULL,
	[price] [float] NOT NULL,
	[description] [nvarchar](100) NULL,
 CONSTRAINT [PK_Goods] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET IDENTITY_INSERT [dbo].[Contacts] ON 

INSERT [dbo].[Contacts] ([id], [name], [email], [phone]) VALUES (16, N'Василий', N'vasya@gmail.com', N'+7(111) 111-11-11')
INSERT [dbo].[Contacts] ([id], [name], [email], [phone]) VALUES (17, N'Константин', N'konst@gmail.com', N'+7 (222) 222-22-22')
INSERT [dbo].[Contacts] ([id], [name], [email], [phone]) VALUES (18, N'Петр', N'petr@gmail.com', N'+7(333) 333-33-33')
INSERT [dbo].[Contacts] ([id], [name], [email], [phone]) VALUES (19, N'Роман', N'roman@gmail.com', N'+7 (444) 444-44-44')
INSERT [dbo].[Contacts] ([id], [name], [email], [phone]) VALUES (20, N'Яков', N'yakov@gmail.com', N'+7 (555) 555-55-55')
SET IDENTITY_INSERT [dbo].[Contacts] OFF
SET IDENTITY_INSERT [dbo].[Contribution] ON 

INSERT [dbo].[Contribution] ([id], [contact_id], [amount], [description]) VALUES (175, 16, 2549.99, N'$, за бензин                                                                                        ')
INSERT [dbo].[Contribution] ([id], [contact_id], [amount], [description]) VALUES (176, 16, 1200, N'р., квартплата                                                                                      ')
INSERT [dbo].[Contribution] ([id], [contact_id], [amount], [description]) VALUES (177, 17, 1500, N'р., проводка интернета                                                                              ')
INSERT [dbo].[Contribution] ([id], [contact_id], [amount], [description]) VALUES (178, 17, 245.99, N'$, за новый фильтр                                                                                  ')
INSERT [dbo].[Contribution] ([id], [contact_id], [amount], [description]) VALUES (179, 18, 8000, N'$, кредит                                                                                           ')
SET IDENTITY_INSERT [dbo].[Contribution] OFF
SET IDENTITY_INSERT [dbo].[Goods] ON 

INSERT [dbo].[Goods] ([id], [contact_id], [title], [price], [description]) VALUES (9, 16, N'автомобиль Ferrari', 4000, N'$, в залоге')
INSERT [dbo].[Goods] ([id], [contact_id], [title], [price], [description]) VALUES (10, 16, N'Вилла', 8000, N'$, в залоге')
INSERT [dbo].[Goods] ([id], [contact_id], [title], [price], [description]) VALUES (11, 17, N'Дом', 15000, N'$')
INSERT [dbo].[Goods] ([id], [contact_id], [title], [price], [description]) VALUES (12, 17, N'Телефон', 800, N'$, черный')
INSERT [dbo].[Goods] ([id], [contact_id], [title], [price], [description]) VALUES (13, 17, N'автомобиль Mazda', 4500, N'$')
INSERT [dbo].[Goods] ([id], [contact_id], [title], [price], [description]) VALUES (14, 18, N'Велосипед', 4500, N'р., б/у')
SET IDENTITY_INSERT [dbo].[Goods] OFF
ALTER TABLE [dbo].[Contribution]  WITH CHECK ADD  CONSTRAINT [FK_Contribution_Contacts] FOREIGN KEY([contact_id])
REFERENCES [dbo].[Contacts] ([id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Contribution] CHECK CONSTRAINT [FK_Contribution_Contacts]
GO
ALTER TABLE [dbo].[Goods]  WITH CHECK ADD  CONSTRAINT [FK_Goods_Contacts] FOREIGN KEY([contact_id])
REFERENCES [dbo].[Contacts] ([id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Goods] CHECK CONSTRAINT [FK_Goods_Contacts]
GO
USE [master]
GO
ALTER DATABASE [SampleDB] SET  READ_WRITE 
GO
