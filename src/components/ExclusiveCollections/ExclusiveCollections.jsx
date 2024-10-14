import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

const ExclusiveCollections = () => {
  return (
    <Grid container spacing={2} sx={{ padding: 2 }}>
      {/* Women's Exclusive */}
      <Grid item xs={12} md={6}>
        <Card
          sx={{
            position: "relative",
            height: "100%",
            backgroundColor: "#f5f5f5",
          }}
        >
          <CardMedia
            component="img"
            image="banner-51.jpg" // Replace with your image path
            alt="Women's Collection"
            sx={{
              height: "100%", // جعل الارتفاع 100%
              width: "100%", // جعل العرض 100%
              objectFit: "cover", // تغطية الصورة بالكامل
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 1,
            }}
          />
          <CardContent
            sx={{
              position: "absolute", // لجعل المحتوى في الزاوية
              bottom: 0,
              right: 0,
              zIndex: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end", // محاذاة النص إلى اليمين
              justifyContent: "flex-end", // محاذاة المحتوى إلى الأسفل
              padding: 2, // إضافة padding لجعل النص يظهر بشكل أفضل
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{ color: "#fff", fontWeight: "bold" }}
            >
              #NEW_YEAR
            </Typography>
            <Typography variant="h5" sx={{ color: "#fff", fontWeight: "bold" }}>
              WOMEN EXCLUSIVE
            </Typography>
            <Button
              variant="outlined"
              sx={{
                marginTop: 2,
                color: "#fff",
                borderColor: "#fff",
                "&:hover": {
                  backgroundColor: "#3c3c3c",
                  color: "#fff",
                  borderColor: "#3c3c3c",
                },
              }}
            >
              SHOP NOW
            </Button>
          </CardContent>
        </Card>
      </Grid>

   {/* Men's Exclusive */}
<Grid item xs={12} md={6}>
  <Card
    sx={{
      position: "relative",
      height: "440px",
      backgroundColor: "#f5f5f5",
    }}
  >
    <CardMedia
      component="img"
      image="banner-52.png" // Replace with your image path
      alt="Men's Collection"
      sx={{
        height: "100%", // جعل الارتفاع 100%
        width: "100%", // جعل العرض 100%
        objectFit: "cover", // تغطية الصورة بالكامل
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 1,
      }}
    />
    <CardContent
      sx={{
        position: "absolute", // لجعل المحتوى في الزاوية
        bottom: 0,
        left: 0, // جعل المحتوى في الجهة اليسرى
        zIndex: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start", // محاذاة النص إلى اليسار
        justifyContent: "flex-end", // محاذاة المحتوى إلى الأسفل
        padding: 2, // إضافة padding لجعل النص يظهر بشكل أفضل
      }}
    >
      <Typography
        variant="subtitle1"
        sx={{ color: "#3c3c3c", fontWeight: "bold" }}
      >
        #NEW_YEAR
      </Typography>
      <Typography variant="h5" sx={{ color: "#3c3c3c", fontWeight: "bold" }}>
        MEN EXCLUSIVE
      </Typography>
      <Button
        variant="outlined"
        sx={{
          marginTop: 2,
          color: "#3c3c3c",
          borderColor: "#3c3c3c",
          "&:hover": {
            backgroundColor: "#3c3c3c",
            color: "#fff",
            borderColor: "#3c3c3c",
          },
        }}
      >
        SHOP NOW
      </Button>
    </CardContent>
  </Card>
</Grid>

    </Grid>
  );
};

export default ExclusiveCollections;
