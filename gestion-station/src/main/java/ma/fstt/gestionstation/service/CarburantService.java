package ma.fstt.gestionstation.service;

import org.springframework.stereotype.Service;


import  ma.fstt.gestionstation.entity.Carburant;
import  ma.fstt.gestionstation.repository.CarburantRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarburantService {

    private final CarburantRepository carburantRepository;

    public CarburantService(CarburantRepository carburantRepository) {
        this.carburantRepository = carburantRepository;
    }

    public List<Carburant> getAllCarburants() {
        return carburantRepository.findAll();
    }

    public Carburant getCarburantById(Long id) {
        return carburantRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Carburant introuvable"));
    }

    public Carburant saveCarburant(Carburant carburant) {
        return carburantRepository.save(carburant);
    }

    public Carburant updateCarburant(Long id, Carburant newCarburant) {
        Carburant existing = getCarburantById(id);
        existing.setNom(newCarburant.getNom());
        existing.setDescription(newCarburant.getDescription());
        return carburantRepository.save(existing);
    }

    public void deleteCarburant(Long id) {
        carburantRepository.deleteById(id);
    }
}
