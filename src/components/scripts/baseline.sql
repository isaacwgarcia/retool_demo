USE [ERA]
GO
    /****** Object:  Table [dbo].[ar_baseline]    Script Date: 7/25/2023 4:16:13 PM ******/
    IF EXISTS (
        SELECT
            *
        FROM
            sys.objects
        WHERE
            object_id = OBJECT_ID(N'[dbo].[ar_baseline]')
            AND type in (N'U')
    ) DROP TABLE [dbo].[ar_baseline]
GO
    /****** Object:  Table [dbo].[[ar_baseline]]    Script Date: 7/25/2023 4:16:13 PM ******/
SET
    ANSI_NULLS ON
GO
SET
    QUOTED_IDENTIFIER ON
GO
    CREATE TABLE [dbo].[ar_baseline](
        [baseline_sku] [varchar](256) NOT NULL,
        [project_id] [varchar](256) NOT NULL,
        [start_date] [date] NULL,
        [end_date] [date] NULL,
        [service_type] [varchar](256) NULL,
        [service_description] [varchar](256) NULL,
        [charge_pivot] [varchar](256) NULL,
        [supplier] [varchar](256) NULL,
        [category] [varchar](256) NULL,
        [subcategory] [varchar](256) NULL,
        [base_qty] [varchar](256) NULL,
        [baseline_unit_cost] [decimal](10, 2) NULL,
        [bl_rate] [decimal](10, 2) NULL,
        [bl_index] [int] NULL,
        [contract_unit_cost] [decimal](10, 2) NULL,
        [contract_rate] [decimal](10, 2) NULL,
        [regular_charge] [varchar](50) NULL,
        PRIMARY KEY CLUSTERED ([baseline_sku] ASC) WITH (
            PAD_INDEX = OFF,
            STATISTICS_NORECOMPUTE = OFF,
            IGNORE_DUP_KEY = OFF,
            ALLOW_ROW_LOCKS = ON,
            ALLOW_PAGE_LOCKS = ON
        ) ON [PRIMARY]
    ) ON [PRIMARY]
GO
ALTER TABLE
    [dbo].[ar_baseline] WITH CHECK
ADD
    FOREIGN KEY([project_id]) REFERENCES [dbo].[ar_project] ([project_id])
GO