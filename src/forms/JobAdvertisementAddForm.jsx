import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import CityService from "../services/cityService";
import JobService from "../services/jobService";
import WorkingTimeService from "../services/workingTime";
import WorkingTypeService from "../services/workingType";
import * as Yup from "yup";
import { Label, Input, Button, TextArea, Form } from "semantic-ui-react";
import JobAdvertisementService from "../services/jobAdvertisementService";
import { toast } from "react-toastify";

export default function JobAdvertisementAddForm() {
  const [cities, setCities] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [workingTypes, setWorkingTypes] = useState([]);
  const [workingTimes, setWorkingTimes] = useState([]);
  useEffect(() => {
    let cityService = new CityService();
    let jobService = new JobService();
    let workingTypeService = new WorkingTypeService();
    let workingTimeService = new WorkingTimeService();
    cityService.getCities().then((result) => {
      setCities(result.data.data);
    });
    jobService.getJobs().then((result) => {
      setJobs(result.data.data);
    });

    workingTimeService.getWorkingTimes().then((result) => {
      setWorkingTimes(result.data.data);
    });

    workingTypeService.getWorkingTypes().then((result) => {
      setWorkingTypes(result.data.data);
    });
  }, []);

  const jobAdvertisementService = new JobAdvertisementService();

  const formik = useFormik({
    initialValues: {
      createdDate: "",
      deadLineDate: "",
      description: "",
      maxSalary: "",
      minSalary: "",
      openPositionNumber: "",
      city: { id: "" },
      employer: { id: "" },
      job: { id: "" },
      workingType: { id: "" },
      workingTime: { id: "" },
    },
    onSubmit: (values) => {
      console.log("çalıştı");
      values.workingTime.id = parseInt(values.workingTime.id);
      values.workingType.id = parseInt(values.workingType.id);
      values.job.id = parseInt(values.job.id);
      values.employer.id = 7;
      values.city.id = parseInt(values.city.id);
      values.openPositionNumber = parseInt(values.openPositionNumber);
      values.minSalary = parseInt(values.minSalary);
      values.maxSalary = parseInt(values.maxSalary);
      jobAdvertisementService.add(values).then((result) => {
        console.log(result.data);
        toast.success(result.data.message);
      });
    },
    validationSchema: Yup.object({
      description: Yup.string().required("İş tanımı alanı boş bırakılamaz"),
      minSalary: Yup.number()
        .typeError("Bu alana metinsel veri girilemez")
        .min(1, "Minumum maaş miktarı 1'den küçük olamaz."),
      maxSalary: Yup.number()
        .typeError("Bu alana metinsel veri girilemez")
        .min(1, "Maximum maaş miktarı 1'den küçük olamaz"),
      openPositionNumber: Yup.number()
        .typeError("Bu alana metinsel veri girilemez")
        .min(1, "Açık pozisyon sayısı 1'den küçük olamaz")
        .required("Bu alan boş bırakılamaz"),
      city: Yup.object().required("Bu alan boş bırakılamaz"),
      job: Yup.object().required("Bu alan boş bırakılamaz"),
      workingTime: Yup.object().required("Bu alan boş bırakılamaz"),
      workingType: Yup.object().required("Bu alan boş bırakılamaz"),
      deadLineDate: Yup.date()
        .typeError("Lütfen geçerli bir tarih formatı girin")
        .required("Bu alan boş bırakılamaz"),
    }),
  });
  console.log("formik values", formik.values);
  return (
    <div>
      <Form onSubmit={formik.handleSubmit}>
        <div className="form-control">
          <Label htmlFor="description">Açıklama</Label>
          <Form.Field
            placeholder="İlan açıklaması"
            control={TextArea}
            style={{ minHeight: 250 }}
            onChange={formik.handleChange}
            id="description"
            name="description"
            value={formik.values.description}
          />
          <div>{formik.errors.description}</div>
        </div>
        <div className="form-control">
          <Label htmlFor="workingTime.id">Çalışma Zamanı</Label>
          <select
            id="workingTime.id"
            name="workingTime.id"
            onChange={formik.handleChange}
            value={formik.values.workingTimeId}
            onBlur={formik.handleBlur}
          >
            <option disabled selected hidden>
              Çalışma zamanı seçiniz
            </option>
            {workingTimes.map((time, index) => (
              <option key={index} value={time.id} label={time.workingTime}>
                {time.workingTime}
              </option>
            ))}
          </select>
          <div>{formik.errors.workingTime}</div>
        </div>
        <div className="form-control">
          <Label htmlFor="workingType.id">Çalışma Tipi</Label>
          <select
            id="workingType.id"
            name="workingType.id"
            value={formik.values.workingTypeId}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option disabled selected hidden>
              Çalışma tipi seçiniz
            </option>
            {workingTypes.map((type, index) => (
              <option key={index} value={type.id} label={type.workingType}>
                {type.workingType}
              </option>
            ))}
          </select>
          <div>{formik.errors.workingType}</div>
        </div>
        <div className="form-control">
          <Label htmlFor="job.id">Pozisyon</Label>
          <select
            id="job.id"
            name="job.id"
            value={formik.values.jobId}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option disabled selected hidden>
              İş pozisyonu seçiniz
            </option>
            {jobs.map((job, index) => (
              <option key={index} value={job.id} label={job.jobsName}>
                {job.jobsName}
              </option>
            ))}
          </select>
          <div>{formik.errors.job}</div>
        </div>
        <div className="form-control">
          <Label htmlFor="city.id">Lokasyon</Label>
          <select
            name="city.id"
            id="city.id"
            value={formik.values.city.id}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option hidden>Şehir seçiniz</option>
            {cities.map((city, index) => (
              <option key={index} value={city.id} label={city.cityName}>
                {city.cityName}
              </option>
            ))}
          </select>
          <div>{formik.errors.city}</div>
        </div>
        <div className="form-control">
          <Label htmlFor="positionNumber">Açık Pozisyon Sayısı</Label>
          <Form.Field
            type="number"
            id="positionNumber"
            control={Input}
            name="openPositionNumber"
            onChange={formik.handleChange}
            value={formik.values.openPositionNumber}
            placeholder="Açık pozisyon sayısı"
            onBlur={formik.handleBlur}
          />
          <div>{formik.errors.openPositionNumber}</div>
        </div>
        <div className="form-control">
          <Label htmlFor="minSalary">Minimum Maaş</Label>
          <Form.Field
            type="text"
            control={Input}
            id="minSalary"
            name="minSalary"
            placeholder="Minimum maaş miktarı"
            onChange={formik.handleChange}
            value={formik.values.minSalary}
            onBlur={formik.handleBlur}
          />
          <div>{formik.errors.minSalary}</div>
        </div>
        <div className="form-control">
          <Label htmlFor="maxSalary">Maximum Maaş</Label>
          <Form.Field
            type="text"
            control={Input}
            id="maxSalary"
            name="maxSalary"
            placeholder="Maximum maaş miktarı"
            onChange={formik.handleChange}
            value={formik.values.maxSalary}
            onBlur={formik.handleBlur}
          />
          <div>{formik.errors.maxSalary}</div>
        </div>
        <div className="form-control">
          <Label htmlFor="deadLineDate">Son Başvuru Tarihi</Label>
          <Form.Field
            type="date"
            control={Input}
            id="deadLineDate"
            name="deadLineDate"
            onChange={formik.handleChange}
            value={formik.values.deadLineDate}
            onBlur={formik.handleBlur}
          />
          <div basic color="red" pointing>
            {formik.errors.deadLineDate}
          </div>
        </div>
        <div className="form-control">
          <Label htmlFor="createdDate">Oluşturulma Tarihi</Label>
          <Form.Field
            type="date"
            id="createdDate"
            control={Input}
            name="createdDate"
            onChange={formik.handleChange}
            value={formik.values.createdDate}
            onBlur={formik.handleBlur}
          />
          <div>{formik.errors.createdDate}</div>
        </div>
        <Button type="submit">Gönder</Button>
      </Form>
    </div>
  );
}
