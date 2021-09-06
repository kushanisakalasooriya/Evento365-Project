package com.project.evento.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.evento.model.Booking;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Long>{

}
