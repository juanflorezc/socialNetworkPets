/*
 Navicat Premium Data Transfer

 Source Server         : jflorez
 Source Server Type    : SQL Server
 Source Server Version : 12002000
 Source Host           : pruebaingreso.database.windows.net:1433
 Source Catalog        : SocialNetworkPets
 Source Schema         : dbo

 Target Server Type    : SQL Server
 Target Server Version : 12002000
 File Encoding         : 65001

 Date: 07/02/2021 18:50:06
*/


-- ----------------------------
-- Table structure for Producto
-- ----------------------------
IF EXISTS (SELECT * FROM sys.all_objects WHERE object_id = OBJECT_ID(N'[dbo].[Producto]') AND type IN ('U'))
	DROP TABLE [dbo].[Producto]
GO

CREATE TABLE [dbo].[Producto] (
  [ProductoId] int  IDENTITY(1,1) NOT NULL,
  [ValorUnitario] int  NOT NULL,
  [Nombre] varchar(200) COLLATE SQL_Latin1_General_CP1_CI_AS  NULL,
  [Eliminado] bit DEFAULT ((0)) NULL,
  [FechaCreacion] datetime  NOT NULL
)
GO


-- ----------------------------
-- Records of Producto
-- ----------------------------
BEGIN TRANSACTION
GO

SET IDENTITY_INSERT [dbo].[Producto] ON
GO

INSERT INTO [dbo].[Producto] ([ProductoId], [ValorUnitario], [Nombre], [Eliminado], [FechaCreacion]) VALUES (N'2', N'10000', N'dogFood 8k', N'0', N'2021-02-07 16:32:17.000'), (N'4', N'20000', N'dogFood 12kg', N'0', N'2021-02-07 00:00:00.000'), (N'5', N'15000', N'juguete gato', N'0', N'2021-02-07 00:00:00.000')
GO

SET IDENTITY_INSERT [dbo].[Producto] OFF
GO

COMMIT
GO


-- ----------------------------
-- Table structure for Proveedor
-- ----------------------------
IF EXISTS (SELECT * FROM sys.all_objects WHERE object_id = OBJECT_ID(N'[dbo].[Proveedor]') AND type IN ('U'))
	DROP TABLE [dbo].[Proveedor]
GO

CREATE TABLE [dbo].[Proveedor] (
  [ProveedorId] int  IDENTITY(1,1) NOT NULL,
  [Correo] varchar(300) COLLATE SQL_Latin1_General_CP1_CI_AS  NOT NULL,
  [Nombre] varchar(200) COLLATE SQL_Latin1_General_CP1_CI_AS  NULL,
  [NIT] varchar(200) COLLATE SQL_Latin1_General_CP1_CI_AS  NULL,
  [Direccion] varchar(300) COLLATE SQL_Latin1_General_CP1_CI_AS  NULL,
  [Eliminado] bit DEFAULT ((0)) NULL,
  [FechaCreacion] datetime  NOT NULL
)
GO


-- ----------------------------
-- Records of Proveedor
-- ----------------------------
BEGIN TRANSACTION
GO

SET IDENTITY_INSERT [dbo].[Proveedor] ON
GO

INSERT INTO [dbo].[Proveedor] ([ProveedorId], [Correo], [Nombre], [NIT], [Direccion], [Eliminado], [FechaCreacion]) VALUES (N'1', N'jherrera@gmail.com', N'Jully', N'201232152', N'calle false123', N'0', N'2021-02-07 00:00:00.000'), (N'2', N'jflorez@gmail.com', N'Pets Food', N'21165465', N'Calle 2 f2351', N'0', N'2021-02-07 00:00:00.000')
GO

SET IDENTITY_INSERT [dbo].[Proveedor] OFF
GO

COMMIT
GO


-- ----------------------------
-- Table structure for Usuario
-- ----------------------------
IF EXISTS (SELECT * FROM sys.all_objects WHERE object_id = OBJECT_ID(N'[dbo].[Usuario]') AND type IN ('U'))
	DROP TABLE [dbo].[Usuario]
GO

CREATE TABLE [dbo].[Usuario] (
  [UsuarioId] int  IDENTITY(1,1) NOT NULL,
  [Correo] varchar(300) COLLATE SQL_Latin1_General_CP1_CI_AS  NOT NULL,
  [Nombres] varchar(200) COLLATE SQL_Latin1_General_CP1_CI_AS  NULL,
  [Apellidos] varchar(200) COLLATE SQL_Latin1_General_CP1_CI_AS  NULL,
  [Passwprd] varchar(300) COLLATE SQL_Latin1_General_CP1_CI_AS  NULL,
  [Eliminado] bit DEFAULT ((0)) NULL,
  [FechaCreacion] datetime  NOT NULL
)
GO


-- ----------------------------
-- Records of Usuario
-- ----------------------------
BEGIN TRANSACTION
GO

SET IDENTITY_INSERT [dbo].[Usuario] ON
GO

INSERT INTO [dbo].[Usuario] ([UsuarioId], [Correo], [Nombres], [Apellidos], [Passwprd], [Eliminado], [FechaCreacion]) VALUES (N'1', N'pepe@hotmail.com', N'Pepe', N'Perez', N'123456', N'0', N'2021-02-07 15:58:03.353'), (N'2', N'mile@gmail.com', N'Milena', N'Nanda', N'987654', N'0', N'2021-02-07 16:00:37.340')
GO

SET IDENTITY_INSERT [dbo].[Usuario] OFF
GO

COMMIT
GO


-- ----------------------------
-- Table structure for Venta
-- ----------------------------
IF EXISTS (SELECT * FROM sys.all_objects WHERE object_id = OBJECT_ID(N'[dbo].[Venta]') AND type IN ('U'))
	DROP TABLE [dbo].[Venta]
GO

CREATE TABLE [dbo].[Venta] (
  [VentaId] int  IDENTITY(1,1) NOT NULL,
  [ProveedorId] int  NOT NULL,
  [ProductoId] int  NOT NULL,
  [Cantidad] int  NOT NULL,
  [Eliminado] bit DEFAULT ((0)) NULL,
  [FechaCreacion] datetime  NOT NULL
)
GO


-- ----------------------------
-- Records of Venta
-- ----------------------------
BEGIN TRANSACTION
GO

SET IDENTITY_INSERT [dbo].[Venta] ON
GO

INSERT INTO [dbo].[Venta] ([VentaId], [ProveedorId], [ProductoId], [Cantidad], [Eliminado], [FechaCreacion]) VALUES (N'1', N'1', N'2', N'20', N'0', N'2021-02-07 00:00:00.000'), (N'3', N'1', N'4', N'50', N'0', N'2021-02-07 00:00:00.000'), (N'4', N'2', N'5', N'20', N'0', N'2021-02-07 00:00:00.000'), (N'5', N'2', N'5', N'10', N'0', N'2021-02-07 00:00:00.000')
GO

SET IDENTITY_INSERT [dbo].[Venta] OFF
GO

COMMIT
GO


-- ----------------------------
-- Primary Key structure for table Producto
-- ----------------------------
ALTER TABLE [dbo].[Producto] ADD CONSTRAINT [PK__Producto__A430AEA3BAF8CE70] PRIMARY KEY CLUSTERED ([ProductoId])
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
GO


-- ----------------------------
-- Primary Key structure for table Proveedor
-- ----------------------------
ALTER TABLE [dbo].[Proveedor] ADD CONSTRAINT [PK__Proveedo__61266A59015CAAE9] PRIMARY KEY CLUSTERED ([ProveedorId])
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
GO


-- ----------------------------
-- Primary Key structure for table Usuario
-- ----------------------------
ALTER TABLE [dbo].[Usuario] ADD CONSTRAINT [PK__Usuario__2B3DE7B8EF940709] PRIMARY KEY CLUSTERED ([UsuarioId])
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
GO


-- ----------------------------
-- Primary Key structure for table Venta
-- ----------------------------
ALTER TABLE [dbo].[Venta] ADD CONSTRAINT [PK__Venta__5B4150AC549A03E6] PRIMARY KEY CLUSTERED ([VentaId])
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
GO


-- ----------------------------
-- Foreign Keys structure for table Venta
-- ----------------------------
ALTER TABLE [dbo].[Venta] ADD CONSTRAINT [fk_Venta_Proveedor_1] FOREIGN KEY ([ProveedorId]) REFERENCES [dbo].[Proveedor] ([ProveedorId]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO

ALTER TABLE [dbo].[Venta] ADD CONSTRAINT [fk_Venta_Producto_1] FOREIGN KEY ([ProductoId]) REFERENCES [dbo].[Producto] ([ProductoId]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO

