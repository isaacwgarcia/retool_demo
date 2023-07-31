USE [ERA]
GO
    /****** Object:  StoredProcedure [dbo].[SP_ADD_BASELINE]    Script Date: 7/25/2023 7:42:10 PM ******/
    /****** Object:  StoredProcedure [dbo].[SP_ADD_BASELINE]    Script Date: 7/25/2023 7:42:10 PM ******/
SET
    ANSI_NULLS ON
GO
SET
    QUOTED_IDENTIFIER ON
GO
    CREATE PROCEDURE [dbo].[SP_ADD_COSTALLOCATION] @baseline_sku VARCHAR(50),
    @chargeid DATE NULL,
    @costcentrecode VARCHAR(256) NULL,
    @invoicecode VARCHAR(256) NULL,
    @issuedate DATE NULL,
    @charge [decimal](10, 2) NULL,
    @gst [decimal](10, 2) NULL,
    @description VARCHAR(256) NULL,
    @chargefrom VARCHAR(256) NULL,
    @chargeto VARCHAR(256) NULL,
    @quantity [int] NULL,
    @rate [decimal](10, 2) NULL,
    @productcodedescription VARCHAR(256) NULL AS BEGIN
UPDATE
    [ERA].[dbo].[ar_costallocation]
SET
    [baseline_sku] = @baseline_sku,
    [chargeid] = @chargeid,
    [costcentrecode] = @costcentrecode,
    [invoicecode] = @invoicecode,
    [issuedate] = @issuedate,
    [charge] = @charge,
    [gst] = @gst,
    [description] = @description,
    [chargefrom] = @chargefrom,
    [chargeto] = @chargeto,
    [quantity] = @quantity,
    [rate] = @rate,
    [productcodedescription] = @productcodedescription
WHERE
    [chargeid] = @chargeid
    and [baseline_sku] = @baseline_sku;

IF @ @ROWCOUNT = 0 BEGIN -- Insert a new row into the retool_motorserve table
INSERT INTO
    [ERA].[dbo].[ar_costallocation] (
        [baseline_sku],
        [chargeid],
        [costcentrecode],
        [invoicecode],
        [issuedate],
        [charge],
        [gst],
        [description],
        [chargefrom],
        [chargeto],
        [quantity],
        [rate],
        [productcodedescription]
    )
VALUES
    (
        @baseline_sku,
        @chargeid,
        @costcentrecode,
        @invoicecode,
        @issuedate,
        @charge,
        @gst,
        @description,
        @chargefrom,
        @chargeto,
        @quantity,
        @rate,
        @productcodedescription
    )
END
END
GO